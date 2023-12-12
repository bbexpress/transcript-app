// TableComponent.js
import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import OpenAI from 'openai';
import { AIConnect } from '../openai-test';
import ModalComponent from './modal';
import axios from 'axios';
import SearchComponent from './search';
import { transcripts } from '../constants';
import './table.css';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

const TableComponent = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serverResponse, setServerResponse] = useState('');
  const [transcriptResponse, setTranscriptResponse] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/data')
      .then((response) => {
        console.log(response);
        setServerResponse(response.data.transcript);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (serverResponse) {
        const AIres = await AIConnect(
          openai,
          `Given the following transcript: ${serverResponse} |END OF TRANSCRIPT| return a response object that includes title, short description, full description, tags, and relevant dates(dates can be loose an actual date/event or date format is not required) in JSON Object format please exclude referencing 'transcript'`,
          0.2
        );
        console.log('AI response:', AIres);
        setTranscriptResponse(AIres);
      }
    };
    fetchData();
  }, [serverResponse]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Short Description',
        accessor: 'short_description',
      },
      // {
      //   Header: 'Description',
      //   accessor: 'full_description',
      // },
      {
        Header: 'Tags',
        accessor: 'tags',
        Cell: ({ value }) => value.join(', '), // Format tags as comma-separated
      },
      {
        Header: 'Dates',
        accessor: 'dates',
        Cell: ({ value }) => value.join(', '), // Format dates as comma-separated
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData });

  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    // Filter data based on search term
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <table {...getTableProps()} className="table-container">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="table-header"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="table-cell-header"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="table-row"
                onClick={() => openModal(row.original)}
                style={{ cursor: 'pointer' }}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} selectedRow={selectedRow} />
    </div>
  );
};

export default TableComponent;
