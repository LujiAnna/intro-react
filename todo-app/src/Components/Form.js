// import logo from './logo.svg';
// import './App.css';
import React from 'react'

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
