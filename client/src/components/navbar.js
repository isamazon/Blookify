import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import '../styles/navbar.css';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // User
  const user = null;

  return (
    <div>
      <nav className="nav-bar">
        <AiOutlineMenu
          onClick={handleClick}
          className="menu-link"
          size="40px"
        />
        <Link to="/" className="homepagelink">
          Blookify
        </Link>
        {/* User logged in/out logic */}
        {user ? (
          <div className="user-profile">
            <img src="{user.result.imageUrl} " alt="" className="user-img" />
            {/* <p> {user.result.name} </p> */}
          </div>
        ) : (
          <Link to="/Login" className="loginlink">
            Login
          </Link>
        )}
        {/* NAV items */}
      </nav>
      <div className={click ? 'side-menu-container' : 'side-menu-closed'}>
        <h1 onClick={handleClick} className="close-btn">
          X
        </h1>
        <h1 className="menu-h1">Menu</h1>
        <Link to="/" onClick={closeMobileMenu} className="menu-link-1">
          Home
        </Link>
        <Link
          to="/Addbook"
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          Add a book!
        </Link>
        <Link
          to="/currentlyreading"
          onClick={closeMobileMenu}
          className="menu-link-1"
        >
          Currently reading
        </Link>
        <Link
          to="/read"
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          My finished books
        </Link>
        <Link className="menu-link-1">About</Link>
      </div>
    </div>
  );
}

export default Nav;
