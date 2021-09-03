import React,  {useState, useEffect} from 'react';
import './App.css';
import Todo from './Components/Todo.js';
import Form from './Components/Form.js';
import Header from './Components/Header.js';

const App = () => {
  const [todos, setTodos] = useState([]);
      const removeTodo = (index) => {    
        console.log(todos.filter((todo, i) => {
            return i !== index
            }));
          setTodos(todos.filter((todo, i) => {
            return i !== index
           }),
          )
      }

   const addTodoInput = (inputTodo) => {
        setTodos([... todos, inputTodo]);
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
