import React,  {useState} from 'react';
import './App.css';
import Todo from './Components/Todo.js';
import Form from './Components/Form.js';
import Header from './Components/Header.js';

const App = () => {
  const [todos, setTodos] = useState([]);
      const removeTodo = (index) => {    
        // remove from local storage as well
        localStorage.removeItem(index);
          setTodos(todos.filter((todo, i) => {
            return i !== index
           }),
          )
      }

   const addTodoInput = (inputTodo) => {
    // Read local storage item 
    //  Start adding ones from local storage
    // keyname 0, 1, 
    console.log('inputTodo: ', inputTodo);

    const iterator = todos.keys();

    for (const key of iterator) {
          //localStorage is an object, so values are stored by key name
          // console.log(key);
         const storeItem = localStorage.getItem(key);
        //data from localStorage is always stored in strings
         console.log('storeItem: ', storeItem);
              
        // TODO: Retrieve localstorage items on page refresh
        // todos.push(Array.from(cat));
    }
        setTodos([...todos, inputTodo]);
  }
 
  return (
    <div className="App">
          <Header name="Anna" />
          <Todo todosData = {todos} removeTodo={removeTodo} />
          <Form addTodoInput={addTodoInput} />
    </div>
  );
}

export default App;
