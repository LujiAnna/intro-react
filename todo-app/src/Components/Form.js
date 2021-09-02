// import logo from './logo.svg';
// import './App.css';
import React,  {useState} from 'react';

//  Add Form
const Form = (props) => {

  // set the initial (use)state of the Form 
  // to be an object with some empty properties,
  //  and assign that initial state to const [input, setInput]
  // '' is the initial state value

const [input, setInput] = useState({
  todo: '', 
  show: ''  
}); 

// console.log( [input, setInput]); // {todo: 'hey'}

// Goal: update the state of Form every time a field is changed in the form,
//  and when we submit, all that data will pass to the App state, which will then update the Todo component.

// First, we'll make the function that will run every time a change is made 
// to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs

 // Now if we go to the front end of our app, we'll see a FORM component that doesn't have a submit yet.
 // Update some fields and you'll see the local state of Form being updated
  const handleChange = (e) => {
    console.log(e.target);
    const {key, value} = e.target;
    // console.log({
    //   [key]: value // {undefined: 'hey'} also in form- state
    // });
    // console.log({
    //    value // {value: 'hey'}, in form-state is {undefined: 'hey'}
    // });
    // console.log(setInput({
    //    value
    // })) // undefined, in form-state is State: {value: "hey"}

     console.log(setInput({
        todo: value
     })) // undefined, in form-state is State:{todo: "hey"}

    // console.log(setInput(
    //    value  // // undefined, in form-state is State: "hey"
    // ))
    //  setInput(
    //    value
    //  )

  // set as object
   setInput({
        todo: value
     })

        // setInput({todo: e.target.value})
                // setInput(e.target.value)

  } 
  
//  prevent form submit default
  const handleSubmit = (e) => {
    e.preventDefault();
    // setInput({show: input.value})
    console.log('You clicked save.');
  }

// Last step: submit that data and update the parent state in App.js

// This function will call addTodoInput function, and pass the Form state through as
//  the todo parameter we defined earlier. 
  const submitForm = () => {
    // pass the new Todo here
  // props.addTodoInput({show: input.todo})
  // console.log(input.todo); //hey
  // console.log(input); // {todo: 'hey'}
  // console.log(props); // {addTodoInput: ƒ} addTodoInput: inputTodo => {…} [[Prototype]]: Object
  // console.log(props.addTodoInput(input.todo)); //undefined
  props.addTodoInput(input);
  // Reset the state to the initial state, to clear the form after submit.
  // console.log({
  // todo: '', 
  // show: ''  
  // });
   setInput({
     todo: '', 
     show: ''  
   });
  console.log(input);
 }

// In the render, let's get our todo property from input state, 
// and assign them as the values that correspond to the proper form keys. 

  return (
    <div className="container">
     <form onSubmit={(e) => { handleSubmit(e);}}>
        <label>
        <input type="text" name="todo" id ="todo" value={input.todo} onChange={handleChange} placeholder='New Todo ...'/>
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

// Now we have data stored in state, and we can remove any item from the state. 
// However, what if we wanted to be able to add new data to state?
//  In a real world application, you'd more likely start with empty state and add to it, such as with a to-do list or a shopping cart.

// Before anything else, let's remove all the hard-coded data from const [todos, setTodos], as we'll be updating that through the form now.