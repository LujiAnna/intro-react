// import logo from './logo.svg';
import '../App.css';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//  pass the data through to the child component (h1) with properties,
//  kind of how you might pass data through using data- attributes. 
// We can call the property whatever we want, as long as it's not a reserved keyword,
// The data I'm passing through is the name variable, and I'll put curly braces around it as it's a JavaScript expression.


// Now that data is being passed through to h1, 
// we have to work on accessing it from the other side.
const Todo = () => {
  return (
    <div className="container">
     <ul className="todoList">
     <li>Go to the park</li>
     <li>Take a rest</li>
     <li>Do Yoga</li>
     </ul>    
    </div>
  );
}

export default Todo;
