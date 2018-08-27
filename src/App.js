import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./uiElements/Navigation";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import BookATable from "./components/routes/BookATable";
import Admin from "./components/routes/Admin";
import Footer from "./uiElements/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/bookatable" component={BookATable} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
