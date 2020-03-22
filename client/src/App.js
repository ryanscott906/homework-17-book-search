import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Navbar";
import Books from "./pages/Books";
import Saved from "./pages/Saved";

function App() {
    return (
<Router>
<div>
  <header></header>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
</Router>
    );
  }

export default App;
