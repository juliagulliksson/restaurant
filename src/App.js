import React, { Component } from 'react';
import './App.css';
import Nav from './uiElements/navbar';
import Book from './components/Book';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Nav />
        <Book />
      </div>
    );
  }
}

export default App;