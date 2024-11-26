import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import './Navbar.css'; // Make sure Navbar.css is in the same directory

const Navbar = () => {
  const { isLoggedIn, userName, setIsLoggedIn } = useAuthContext();  // Accessing context values

  const handleLogout = () => {
    setIsLoggedIn(false);  // Log the user out by updating the context
  };
  
  return (
    <nav className="navbar">
      <h1 className="logo">Clothing Store</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
