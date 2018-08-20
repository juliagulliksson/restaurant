import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SeatingForm from './SeatingForm';
import UserForm from './UserForm';

class Book extends Component {

  state = {
    date: "",
    chooseSeating: false,
    name: "",
    email: "",
    phone: "",
    seatingTimes: {
      seatingOne: "",
      seatingTwo: ""
    },
    chosenSeating: "",
    booking: false
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

  setSeating = (response) => {
    this.setState({
      seatingTimes: {
        seatingOne: response.seatingOne,
        seatingTwo: response.seatingTwo
      },
      chooseSeating: true
    })
  }

  proceedBooking = () => {
    this.setState({
      booking: true
    })
  }

  book = () => {
    console.log(this.state);
    let formValues = JSON.stringify(this.state);
    fetch('http://localhost/restaurant/src/components/php/post.php?formData=' + formValues,{
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
      <div>
        <SearchForm dateChange= {this.handleChange}
        dateValue = {this.state.date} handleClick={this.searchForVacantSeatings}/>

        {this.state.chooseSeating && 
        <SeatingForm seatingTimes = {this.state.seatingTimes}
        chosenSeating = {this.state.chosenSeating}
        handleChange={this.handleChange}
        handleClick = {this.proceedBooking} /> }

        {this.state.booking && <UserForm handleChange={this.handleChange} handleClick={this.book}/>}
      </div>
    );
  }
}

export default Book;