import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
// Main pages

import Home from './Home';
import Test from './components/test';
import Login from './components/login/login';
import Addbook from './components/reading/addbook';
import Currently from './components/reading/currentlyreading';
import Read from './components/read/read.js';
// Nav
import Nav from './components/navbar';
// redux
import { getPosts } from './actions/posts.js';
import { getReadBook } from './actions/readposts.js';
import { useDispatch } from 'react-redux';
function App() {
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadBook(), getPosts());
  }, [dispatch]);
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Addbook" component={Addbook} />
        <Route exact path="/currentlyreading" component={Currently} />
        <Route exact path="/read" component={Read} />
        <Route path="*"></Route>
      </Switch>
    </div>
  );
}

export default App;
