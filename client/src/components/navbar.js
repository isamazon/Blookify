import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/navbar.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpen,
    }));
  }
  render() {
    const openMenu = this.state.isOpened
      ? "side-menu-container"
      : "side-menu-closed";
    return (
      <div>
        <nav className="nav-bar">
          <AiOutlineMenu
            onClick={this.handleHover}
            className="menu-link"
            size="40px"
          />
          <Link to="/" className="homepagelink">
            Blookify
          </Link>
          <Link to="/" className="loginlink">
            Login
          </Link>
        </nav>
        <div className={openMenu}>
          <h1>X</h1>
          <h1>Menu</h1>
          <Link className="menu-link-1 link-mid">Link 1</Link>
          <Link className="menu-link-1">Link 2</Link>
          <Link className="menu-link-1">Link 3</Link>
          <Link className="menu-link-1">Link 4</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
