import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Book extends Component {

  state = {
    date: "",
    chooseSeating: false,
    username: "",
    email: "",
    phone: "",
    seatingOne: "",
    seatingTwo: ""
  }

  handleChange = (event) => {
    //Update all input field states based on their HTML names
    this.setState({ [event.target.name]: event.target.value });
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
        this.setSeating(response);
      })
  }

  setSeating = (seatingTimes) => {
    this.setState({
      seatingOne: seatingTimes.seatingOne,
      seatingTwo: seatingTimes.seatingTwo,
      chooseSeating: true
    })
  }

  render() {
    return (
      <div className="App">
        <SearchForm dateChange= {this.handleChange}
        dateValue = {this.state.date} handleClick={this.searchForVacantSeatings}/>

        {this.state.chooseSeating && <div><p>Hej</p></div>}
      </div>
    );
  }
}

export default Book;