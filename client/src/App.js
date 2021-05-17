import React from "react";
import { Route, Switch } from "react-router-dom";

// Main pages

import Home from "./Home";
import Test from "./components/test";
import Login from "./components/login/login";
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
