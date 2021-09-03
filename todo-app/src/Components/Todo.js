import React from 'react';
import '../App.css';

const Todo = (props) => {
      const rows = props.todosData.map((row, index) => {
       return (
         <tr key ={index}>
           <td>{row.todo}</td>
           <td>{row.completed}</td>
            <td><button onClick={() => props.removeTodo(index)}>Clear</button></td>
           </tr>
       );     
      })

  return (
    <table className="container todoList">
      {rows}
    </table>
  );
}

export default Todo;