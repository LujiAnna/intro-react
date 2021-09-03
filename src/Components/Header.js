import '../App.css';
import React from 'react'

const Header = (props) => {
  return (
    <header>
     <h1>Hello, {props.name}</h1>   
    </header>
  );
}

export default Header;

