// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//  pass the data through to the child component (h1) with properties,
//  kind of how you might pass data through using data- attributes. 
// We can call the property whatever we want, as long as it's not a reserved keyword,
// The data I'm passing through is the name variable, and I'll put curly braces around it as it's a JavaScript expression.


// Now that data is being passed through to h1, 
// we have to work on accessing it from the other side.
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
