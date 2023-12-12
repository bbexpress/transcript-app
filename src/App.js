import logo from './logo.svg';
import './App.css';
import OpenAI from "openai";
import { AIConnect } from './openai-test.js'; 
import { useEffect } from 'react';
import TableComponent from './Components/table.jsx';
// import * as fs from 'fs';

const openai = new OpenAI(
  {apiKey: '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',
dangerouslyAllowBrowser: true}
);
// fs.readfile('message.txt', 'utf8', function(err,data) {
//   if(err) throw err;
//   let obj = {};
//   let splitted = data.toString().split("\n");
//   for (let i = 0; i<splitted.length; i++) {
//       let splitLine = splitted[i].split(":");
//       obj[splitLine[0]] = splitLine[1].trim();
//   }
//   console.log('message output',obj);
// });
const response = AIConnect(openai, 'come up with a winter/christmas themed app name for an app that summarizes zoom transcripts');

  // Sample data
  const data = [
    {
      title: 'React Table Example',
      shortDescription: 'A simple example of using react-table',
      description: 'This is a longer description for the React Table example.',
      tags: 'React, Table, Example',
      dates: ['2023-01-01', '2023-01-11'],
    },
    // Add more data objects as needed
  ];

function App() {
  return (
    <div className="App">
      <h1>Table Component Example</h1>
      <TableComponent data={data} />
    </div>
  );
}

export default App;
