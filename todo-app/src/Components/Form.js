// import logo from './logo.svg';
// import './App.css';
import React,  {useState} from 'react';

//  Add Form
const Form = (props) => {

  // set the initial state of the Form 
  // to be an object with some empty properties,
  //  and assign that initial state to this.state
  // '' is the initial state value

const [input, setInput] = useState({
  todo: '',
}); 

// Goal: update the state of Form every time a field is changed in the form,
//  and when we submit, all that data will pass to the App state, which will then update the Todo.

// First, we'll make the function that will run every time a change is made 
// to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs

  const handleChange = (e) => {
   const [input] = setInput(e.target.value)
  } 
  
  // Now if we go to the front end of our app, we'll see a form that doesn't have a submit yet.
  // Update some fields and you'll see the local state of Form being updated
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked save.');
  }

  //  const addInput = (e) => {
  //   setInput(e.target.value)
  // }

  return (
    <div className="container">
     <form onSubmit={handleSubmit}>
        <label>
        <input type="text" name="todo" id ="todo" placeholder="New Todo" value={input.todo} onChange={handleChange}/>
        </label>
        {/* set input value in dom and browser */}
         <input type="submit" value="Save" />
     </form>  

    </div>
  );
}

export default Form;