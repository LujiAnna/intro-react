// import logo from './logo.svg';
import React,  {useState} from 'react';
import './App.css';
import Todo from './Components/Todo.js';
import Form from './Components/Form.js';
import Header from './Components/Header.js';

// Then let's move all that data to an array of objects, 
// as if we were bringing in a JSON-based API. 
// We'll have to create this array inside our render().

// Now, we're going to pass the data through to the child component (Todo) with properties, 
// kind of how you might pass data through using data- attributes. 
// We can call the property whatever we want, as long as it's not a reserved keyword, 
// so I'll go with todoData. The data I'm passing through is the todos variable, 
// and I'll put curly braces around it as it's a JavaScript expression.

const App = () => {
  // props to state
  // create state object
  // The object will contain properties for everything you want to 
  // store in the state. For us, it's todos.

  // Declare a new state variable, which we'll call "todos"

  // useState is a new way to use the exact same capabilities that this.state provides in a class.
  //  Normally, variables “disappear” when the function exits but state variables are preserved by React.
  
  // Our data is officially contained in the state. 
  // Since we want to be able to remove a todo from the table, we're going to create a removeTodo method on the parent App class.
  // setTodos is a function to update todos (a built-in method for manipulating state)
  const [todos, setTodos] = useState([
      {
        todo: 'Make Tea',
        completed: true,
      },
       {
        todo: 'Make Fries',
        completed: false,
      },
       {
        todo: 'Make Form',
        completed: true,
      }, 
    ]);
  
    // const todos = [
    //   {
    //     todo: 'Make Tea',
    //     completed: true,
    //   },
    //    {
    //     todo: 'Make Fries',
    //     completed: false,
    //   },
    //    {
    //     todo: 'Make Form',
    //     completed: true,
    //   }, 
    // ]
  return (
    <div className="App">
          <Header name="Anna" />
          {/* Display/Read state */}
          <Todo todosData = {todos} />
          <Form />
    </div>
  );
}

export default App;
