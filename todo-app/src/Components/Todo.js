// import logo from './logo.svg';
import React from 'react';
import '../App.css';

//  Add data
// First: Hard code
// Second: Use Default Component: https://blog.logrocket.com/a-complete-guide-to-default-props-in-react-984ea8e6972d/

// Now that data is being passed through to Todo, 
// we have to work on accessing it from the other(this) side. {props.todos}

// Create a parameter variable that contains props
// pass it through to the Todo, once again through props.
const Todo = (props) => {

 // const [todos, removeTodo] = useState();
// const {todosData} = props;
// const {...restProps} = props;


// pass the props through as a parameter,
//  and map through the array to return a list row 
// for each object in the array. 
// This map will be contained in the rows variable, which we'll return as an expression.
     
    // always use keys when making lists in React, as they help identify each list item. 
    // We'll also see how this is necessary in a moment when we want to manipulate list items. 
     
     
    //  Since we're passing it down to Todo, we're going to have to pass it through again as a prop,
    //  just like we did with the todosData(changed to todos)

// todosData was an array of objects but now its an object after using state
    // https://stackoverflow.com/questions/30142361/react-js-uncaught-typeerror-this-props-data-map-is-not-a-function
    // console.log(props);
    // let data = Array.from(props.todosData);

      const rows = props.todosData.map((row, index) => {
       return (
         <tr key ={index}>
           <td>{row.todo}</td>
           <td>{row.completed}</td>
           {/* when button click, remove specific (index) entrance */}
           {/* pass the key/index through as a parameter, so the filter function knows which item to remove. We'll create a button with an onClick and pass it through. */}
           {/* <td><button onClick={() => console.log("test")}>Clear</button></td> */}
            <td><button onClick={() => props.removeTodo(index)}>Clear</button></td>
           </tr>
       );     
      })



// console.log(props);
// console.log(props.todos); // undefined
// call the prop Name NOT value
// console.log(props.todosData);

  return (
    <table className="container todoList">
  {rows}

        {/* <p>{props.todosData}</p> */}
        {/* {props.todos} */}

     {/* <ul className="todoList">
     <li>Go to the park</li>
     <li>Take a rest</li>
     <li>Do Yoga</li>
     </ul>     */}
    </table>
  );
}

// If you open up React DevTools and inspect the Todo component,
//  you'll see the array of data in the property. 
// The data that's stored here is known as the virtual DOM, 
// which is a fast and efficient way of syncing data with the actual DOM.

// This data is not in the actual DOM yet, though. 
// In Todo, we can access all props through props. 
// We're only passing one props through, todosData, so we'll use props.todosData to retrieve that data.

// why not todosData instead of todos???

export default Todo;

// If you view the front end of the app, all the data is loading in now.

// You'll notice I've added a key index to each list row. 
// You should always use keys when making lists in React, 
// as they help identify each list item. 
// We'll also see how this is necessary in a moment when 
// we want to manipulate list items.

// Props are an effective way to pass existing data to a 
// React component, however the component cannot change 
// the props - they're read-only. In the next section,
//  we'll learn how to use state to have further control 
// over handling data in React.