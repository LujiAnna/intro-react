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
  show: ''
}); 

// Goal: update the state of Form every time a field is changed in the form,
//  and when we submit, all that data will pass to the App state, which will then update the Todo.

// First, we'll make the function that will run every time a change is made 
// to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs

 // Now if we go to the front end of our app, we'll see a FORM component that doesn't have a submit yet.
 // Update some fields and you'll see the local state of Form being updated
  const handleChange = (e) => {
        setInput({todo: e.target.value})
                // setInput(e.target.value)

  } 
  
//  prevent form submit default
  const handleSubmit = (e) => {
    e.preventDefault();
    // setInput({show: input.value})
    console.log('You clicked save.');
  }

  // submit that data and update the parent state in App.js

 
// This function will call addTodoInput function, and pass the Form state through as
//  the todo parameter we defined earlier. 
  const submitForm = () => {
    // pass the new Todo here
  // props.addTodoInput({show: input.todo})
    props.addTodoInput(input.todo)

// It will also reset the state to the initial state, to clear the form after submit.
  // setInput(initialState)
}

  return (
    <div className="container">
     <form onSubmit={(e) => {submitForm(); handleSubmit(e);}}>
        <label>
        <input type="text" name="todo" id ="todo" value={input.todo} onChange={handleChange}/>
        </label>
        {/* set input value in dom and browser */}
        {/* add a submit button to submit the form.
        //  We're using an onClick instead of an onSubmit or type='submit' since we're not using the standard submit functionality. 
        // The click will call the submitForm we just made. */}
         <input type="button" value="Save" onClick={submitForm}/>
     </form>  

    </div>
  );
}

export default Form;