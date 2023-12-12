// TableComponent.js
import React, { useState } from 'react';
import { useTable } from 'react-table';
import ModalComponent from './modal';
import './table.css';

const TableComponent = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Short Description',
        accessor: 'shortDescription',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
      },
      {
        Header: 'Dates',
        accessor: 'dates',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <table {...getTableProps()} className="table-container">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="table-cell-header">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="table-row"
                onClick={() => openModal(row.original)}
                style={{ cursor: 'pointer' }}
              >
                {row.cells.map(cell => (
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
