import React from "react";
import logo from "../../images/logo.jpg";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar' >
      <h1 className='brand-name' >MealDB Official</h1>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/food">Food</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
