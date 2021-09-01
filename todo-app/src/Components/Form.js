// import logo from './logo.svg';
// import './App.css';
import React from 'react'

//  Add Form
const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked save.');
  }

  return (
    <div className="container">
     <form onSubmit={handleSubmit}>
        <label>
        <input type="text" name="todo" placeholder="New Todo"/>
        </label>
        {/* set input value in dom and browser */}
         <input type="submit" value="Save" />
     </form>     
    </div>
  );
}

export default Form;