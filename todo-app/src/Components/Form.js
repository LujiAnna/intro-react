// import logo from './logo.svg';
// import './App.css';
import React,  {useState} from 'react';

//  Add Form
const Form = (props) => {

  const [input, setInput] = useState({
    todo: '', 
    show: ''  
  }); 

  const handleChange = (e) => {
    console.log(e.target);
    const {key, value} = e.target;
     console.log(setInput({
        todo: value
     })) 

   setInput({
        todo: value
     })
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked save.');
  }

  const submitForm = () => {
  props.addTodoInput(input);
   setInput({
     todo: '', 
     show: ''  
   });
 }

  return (
    <div className="container">
     <form onSubmit={(e) => { handleSubmit(e);}}>
        <label>
          <input type="text" name="todo" id ="todo" value={input.todo} onChange={handleChange} placeholder='New Todo ...'/>
        </label>
         <input type="button" value="Save" onClick={submitForm}/>
     </form>  

    </div>
  );
}

export default Form;
