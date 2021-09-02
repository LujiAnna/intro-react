# intro-react

build a small Todo application that lives in your browser, and saves todos even after restarting the browser.

- be able to create a new React application
- be able to "think in React"
- be able to use basic hooks for managing state and reactivity
- be able to organize your app in components


🌱 Must-have's
<<<<<<< HEAD:READMEREACT.md
- [x] Read this [docs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- [x] Create a React application and run it locally on your browser (hint-hint: start here)
```
npx create-react-app todo-app
cd todo-app
yarn start
```

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
➜  todo-app git:(main) ✗ node -v
v14.16.0

Switch to node 15.9: ~ nvm use 15.9
```
➜  todo-app git:(main) ✗ nvm use 15.9
Now using node v15.9.0 (npm v7.5.3)
```

When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.

- [x] Publish the source code on your GitHub repository
- [ ] Build a Todo App with React.js (Check out this useful instructions ) . CRUD
     - [ ] Create: Add text as a form input
        - [x] Components: import, export, import {Component} from 'React'. Error Todo is not defined. https://stackoverflow.com/questions/44441734/react-js-error-is-not-defined-react-jsx-no-undef/48487955
        - [x] React Developer Tools
        - [x] Props/properties to handle data. Props are basically kind of global variable or object. Passing and Accessing props. We can pass props to any component as we declare attributes for any HTML tag. Access - this.props.propName; ‘this.props’ is a kind of global object which stores all of a components props. The propName, that is the names of props are keys of this object. to access a prop from a function we do not need to use the ‘this’ keyword anymore. Functional components accept props as parameters and can be accessed directly- props.propName
        - [!] default props: https://www.geeksforgeeks.org/reactjs-props-set-2/ The defaultProps is a method that we can use to store as much information as we want for a particular class. And this information can be accessed from anywhere inside that particular class. Every piece of information you add inside the defaultProps, will be added as the prop of that class
        - [x] State. With props, we have a one way data flow, but with state we can update private data from a component. You can think of state as any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.
        The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
        In props there is rendering but in state there's storing the value of time as a member of the component’s state.
        Props Vs State:
        Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
        States can only be used in Class Components while Props don’t have this limitation.
        While Props are set by the parent component, State is generally updated by event handlers. https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state
        Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only. In the next section, we'll learn how to use state to have further control over handling data in React.
        - [x] State Hooks. https://reactjs.org/docs/hooks-state.html
        Lets you use State without a class.
        You might have previously known these as “stateless components”. We’re now introducing the ability to use React state from these, so we prefer the name “function components”.
        Hooks don’t work inside classes. But you can use them instead of writing classes.
        - [x] Hook: starts by importing the useState Hook from React. A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. 
        When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. https://reactjs.org/docs/hooks-rules.html
        What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. if for example, we just want a number for how many times the user clicked, we pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)
        What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. Hook names always start with use
        - [ ] Effect Hook: lets you perform side effects in function components. you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined. eg seen in Data fetching, setting up a subscription, and manually changing the DOM
        - [!] Controlled component
     - [ ] Read: Show input text in browser
     - [ ] Update: Change text in browser
     - [ ] Delete: Delete text from browser
       - [x] Handling Events: https://reactjs.org/docs/handling-events.html
          - React events are named using camelCase, rather than lowercase.
          - JSX you pass a function as the event handler, rather than a string.
          - When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
- [ ] Save your todo's, even after starting the browser again
  - [ ] Submitting Form Data
- [ ] Deploy the project on a live server Tip if you choose Netlify: to deploy a React app you first run the command npm run build, and once the command finishes you will have your app ready in the build folder: just drag and drop this folder in Netlify and you are done. Easy!

=======
- Publish the source code on your GitHub repository
- Build a Todo App with React.js (Check out this useful instructions )
- Save your todo's, even after starting the browser again
- Deploy the project on a live server Tip if you choose Netlify: to deploy a React app you first run the command npm run build, and once the command finishes you will have your app ready in the build folder: just drag and drop this folder in Netlify and you are done. Easy!
>>>>>>> 24886c95d9eb06c99d7f5b14eba4c6dde06c1c4a:README.md

🌼 Nice-to-have (doable)
- [x] Refactor. 
     - [x] use ES6 arrow functions
     - [ ] use map, filter, reduce, 
     - [ ] [tutorials](https://github.com/becodeorg/gnt-verou-2/tree/main/3.The-Mountain/12.React/2.Extra-Documentation)
- [x] Add styling
- [x] Improve responsiveness
- [ ] Check for little, smooth effects
- [ ] Think UX: what extra features can make your todo app better?


🌳 Nice-to-have (hard)
- [ ] Install a react package of a calendar and implement it in a new component into your App.
- [ ] Install and use React-router-dom as a router between components. (Hint: Think about a structure like: router -> show component)
- [ ] Have a live edit option for existing todo's (when you click on the text of a todo, the app allows you to edit it in place).
- [ ] Make a version with another JS framework like VueJS or Svelte.



