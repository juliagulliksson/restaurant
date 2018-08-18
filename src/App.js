import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/searchForm';

class App extends Component {

  state = {
    date: 0
  }

  handleChange = (event) => {
    this.setState({ date: event.target.value })
  }
  
  searchForVacantSeatings = () => {

    let formValues = JSON.stringify(this.state.date);
    fetch('http://localhost/restaurant/src/components/php/search.php?formData=' + formValues,{
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <SearchForm dateChange= {this.handleChange}
        dateValue = {this.state.date} handleClick={this.searchForVacantSeatings}/>
      </div>
    );
  }
}

export default App;