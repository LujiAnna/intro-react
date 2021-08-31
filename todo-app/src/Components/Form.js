// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//  Add Form
const Form = () => {
  return (
    <div className="container">
      <form>
        <label>
        <input type="text" name="todo" placeholder="New Todo"/>
        </label>
         <input type="submit" value="Save" />
     </form>     
    </div>
  );
}

export default Form;
