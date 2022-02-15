import React from "react";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Brands from "./components/Brands";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar
          className="Navbar"
          bg="purple"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
            <Navbar.Brand href="/"> CARGallery</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/brand/:brand" component={Brands}></Route>
        </Switch>
      </div>
    </Router>
  );
}