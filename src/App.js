import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Book from "./components/Book";
import Navigation from "./components/Navigation";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import BookATable from "./components/routes/BookATable";
import Admin from "./components/routes/Admin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/bookatable" component={BookATable} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </div>
    );
  }
}

export default App;
