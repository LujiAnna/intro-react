// import logo from './logo.svg';
import React, {Component} from 'react'
import ReactDOM from 'react-dom' 
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
  // state = {
  //   todos: [
  //     {
  //       todo: 'Make Tea',
  //       completed: true,
  //     },
  //      {
  //       todo: 'Make Fries',
  //       completed: false,
  //     },
  //      {
  //       todo: 'Make Form',
  //       completed: true,
  //     }, 
  //   ]
  // }
    const todos = [
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
    ]
  return (
    <div className="App">
          <Header name="Anna" />
          <Todo todosData = {todos} />
          <Form />

    </div>
  );
}

export default App;
