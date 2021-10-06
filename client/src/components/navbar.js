import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from '@material-ui/core';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import pic1 from '../assets/user.png';
import '../styles/navbar.css';

function Nav() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [profileDrop, setProfileDrop] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
    window.location.reload(false);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const ToggleProfile = () => setProfileDrop(!profileDrop);

  // useEffect(() => {
  //   const token = user?.token;

  //   // JWT

  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // }, []);
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
            <img
              src={user.result.imageUrl ? user.result.imageUrl : pic1}
              alt="ss"
              className="user-img"
              onClick={ToggleProfile}
            />
            <div className={profileDrop ? 'dropdownmenu' : 'hiddenmenu'}>
              <p className="user-p">User: {user.result.name}</p>
              <Button className="logout-button" onClick={logout}>
                Logout <FiLogOut className="logout-btn" />
              </Button>
            </div>
          </div>
        ) : (
          <Link to="/Login" className="loginlink">
            Login
          </Link>
        )}
        {/* NAV items */}
      </nav>

      <div className={click ? 'side-menu-container' : 'side-menu-closed'}>
        <div
          className={click ? 'side-menu-parent' : 'side-menu-closed'}
          onClick={handleClick}
        ></div>
        <h1 onClick={handleClick} className="close-btn">
          X
        </h1>
        <h1 className="menu-h1">Menu</h1>
        <Link to="/" onClick={closeMobileMenu} className="menu-link-1">
          Home
        </Link>
        <Link
          to={user ? '/Addbook' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          Add a book!
        </Link>
        <Link
          to={user ? '/currentlyreading' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1"
        >
          Currently reading
        </Link>
        <Link
          to={user ? '/read' : '/login'}
          onClick={closeMobileMenu}
          className="menu-link-1 link-mid"
        >
          My finished books
        </Link>
        {user ? (
          <Button className="menu-logout" onClick={logout}>
            Logout <FiLogOut className="logout-btn" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
