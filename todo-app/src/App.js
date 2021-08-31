// import logo from './logo.svg';
import React, {Component} from 'react'
import ReactDOM from 'react-dom' 
import './App.css';
import Todo from './Components/Todo.js';
import Form from './Components/Form.js';
import Header from './Components/Header.js';


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
          <Header name="Anna" />
          <Todo />
          <Form />

    </div>
  );
}

export default App;
