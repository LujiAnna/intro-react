// import logo from './logo.svg';
import React, {Component} from 'react'
import ReactDOM from 'react-dom' 
import './App.css';
import Todo from './Components/Todo.js';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Write your todo</h1>
        <p>
        React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <Todo name="Anna" />
    </div>
  );
}

export default App;
