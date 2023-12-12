import logo from './logo.svg';
import './App.css';
import OpenAI from "openai";
import { AIConnect } from './openai-test.js'; 
import { useEffect } from 'react';
// import * as fs from 'fs';

const openai = new OpenAI(
  {apiKey: 'UPDATE THIS',
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
const response = AIConnect(openai, 'what are the top ten ranked movies');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
