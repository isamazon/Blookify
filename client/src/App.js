import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
// Main pages

import Home from "./Home";
import Test from "./components/test";
import Login from "./components/login/login";
import Addbook from "./components/reading/addbook";
import Currently from "./components/reading/currentlyreading";

// redux
import { getPosts } from "./actions/posts.js";
import { useDispatch } from "react-redux";
function App() {
  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Addbook" component={Addbook} />
        <Route exact path="/currentlyreading" component={Currently} />
        <Route path="*"></Route>
      </Switch>
    </div>
  );
}

export default App;
