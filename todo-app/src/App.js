// import logo from './logo.svg';
import React,  {useState, useEffect} from 'react';
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
  
   // Declare multiple state variables!
  //  remove all the hard-coded data from useState, as we'll be updating that through the form now.
  // create form component

  // const [todos, setTodos] = useState([]);
  
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

    // remove entrance from browser and DOM
    // You must use *setTodos() to modify an array using filter. 
    // Simply applying a new value to state.property will not work
      const removeTodo = (index) => {
        // console.log('You have clicked clear button');
        console.log(index);
        // const [todos, setTodos] = useState(); 
        // remove
        // *filter method: does not mutate but rather creates a new array,
        //  and is a preferred method for modifying arrays in JavaScript. 
        // This particular method is testing an index vs. all the indices in the array, 
        // and returning all but the one that is passed through
        // modify-update state using setTodos inbuilt method
        console.log(todos.filter((todo, i) => {
            return i !== index
            }));
       // ERROR: removes all
          setTodos(todos.filter((todo, i) => {
            return i !== index
           }),
          )
      }

// update the state by taking the existing todos 
  // and adding the new todo parameter, using the ES6 spread operator.
   const addTodoInput = (inputTodo) => {
        setTodos({todos: [... todos, inputTodo]})
  }
  // make sure we pass that through as a parameter on Form.



// Now we have to pass removeTodo function through to the component,
//  and render a button next to each character that can invoke the function. 
// We'll pass the removeTodo function through as a prop to Todo.
  return (
    <div className="App">
          <Header name="Anna" />
          {/* Display/Read state */}
          <Todo todosData = {todos} removeTodo={removeTodo} />
          <Form addTodoInput={addTodoInput} />
    </div>
  );
}

export default App;
