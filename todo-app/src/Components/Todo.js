// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

function Todo(props) {
  return (
    <div className="container">
     <h1>Hello, {props.name}</h1>
            <form>
  <label>
    <input type="text" name="todo" placeholder="New Todo"/>
  </label>
  <input type="submit" value="Save" />
</form>

       
    </div>
  );
}

export default Todo;
