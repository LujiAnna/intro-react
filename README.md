# intro-react

build a small Todo application that lives in your browser, and saves todos even after restarting the browser.

- be able to create a new React application
- be able to "think in React"
- be able to use basic hooks for managing state and reactivity
- be able to organize your app in components


🌱 Must-have's
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
     - [x] Create: Add text as a form input
        - [x] Components: import, export, import {Component} from 'React'. Error Todo is not defined. https://stackoverflow.com/questions/44441734/react-js-error-is-not-defined-react-jsx-no-undef/48487955
        - [x] React Developer Tools
        - [x] Props/properties to handle data. Props are basically kind of global variable or object. Passing and Accessing props. We can pass props to any component as we declare attributes for any HTML tag. Access - this.props.propName; ‘this.props’ is a kind of global object which stores all of a components props. The propName, that is the names of props are keys of this object. to access a prop from a function we do not need to use the ‘this’ keyword anymore. Functional components accept props as parameters and can be accessed directly- props.propName
        - [!] default props: https://www.geeksforgeeks.org/reactjs-props-set-2/ The defaultProps is a method that we can use to store as much information as we want for a particular class. And this information can be accessed from anywhere inside that particular class. Every piece of information you add inside the defaultProps, will be added as the prop of that class
        - [] State. With props, we have a one way data flow, but with state we can update private data from a component. You can think of state as any data that should be saved and modified without necessarily being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.
        The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
        In props there is rendering but in state there's storing the value of time as a member of the component’s state.
        Props Vs State:
        Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
        States can only be used in Class Components while Props don’t have this limitation.
        While Props are set by the parent component, State is generally updated by event handlers. https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state
        - [!] Controlled component
     - [ ] Read: Show input text in browser
     - [ ] Update: Change text in browser
     - [ ] Delete: Delete text from browser
- [ ] Save your todo's, even after starting the browser again
- [ ] Deploy the project on a live server Tip if you choose Netlify: to deploy a React app you first run the command npm run build, and once the command finishes you will have your app ready in the build folder: just drag and drop this folder in Netlify and you are done. Easy!


🌼 Nice-to-have (doable)
- [ ] Refactor. 
     - [ ] use ES6 arrow functions
     - [ ] [tutorials](https://github.com/becodeorg/gnt-verou-2/tree/main/3.The-Mountain/12.React/2.Extra-Documentation)
- [ ] Add styling
- [ ] Improve responsiveness
- [ ] Check for little, smooth effects
- [ ] Think UX: what extra features can make your todo app better?


🌳 Nice-to-have (hard)
- [ ] Install a react package of a calendar and implement it in a new component into your App.
- [ ] Install and use React-router-dom as a router between components. (Hint: Think about a structure like: router -> show component)
- [ ] Have a live edit option for existing todo's (when you click on the text of a todo, the app allows you to edit it in place).
- [ ] Make a version with another JS framework like VueJS or Svelte.



