import React from "react";
import { Route, Switch } from "react-router-dom";

// Main pages

import Home from "./Home";
import Test from "./components/test";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
