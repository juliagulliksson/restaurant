import React, { Component } from "react";
import SeatingForm from "./SeatingForm";
import Gdpr from "../uiElements/gdpr";
import UserForm from "./UserForm";
import SearchForm from "./SearchForm";

class Book extends Component {
  state = {
    date: localStorage.getItem('date'),
    chooseSeating: false,
    name: "",
    email: "",
    phone: "",
    seatingTimes: {
      seatingOne: "",
      seatingTwo: ""
    },
    chosenSeating: "",
    booking: false,
    bookingComplete: false,
    error: ""
  };

  handleChange = event => {
    //Update all input field states based on their HTML names
    this.setState({ [event.target.name]: event.target.value });
  };

  /* handleDateChange = date => {
    const selectedDate = date.format("YYYY-MM-DD");
    this.setState({ date: selectedDate });
  }; */

  searchForVacantSeatings = () => {
    let formValues = JSON.stringify(this.state.date);
    fetch(
      "http://localhost/restaurant/src/components/php/search.php?formData=" +
      formValues,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        this.setSeating(response);
      });
  };

  setSeating = response => {
    this.setState({
      seatingTimes: {
        seatingOne: response.seatingOne,
        seatingTwo: response.seatingTwo
      },
      chooseSeating: true
    });
  };

  agreeGdpr = () => {
    this.setState({
      gdpr: false,
      booking: true
    })
  }

  proceedBooking = () => {
    if(this.state.chosenSeating !== ""){
      this.setState({ error: "", gdpr: true });
    } else {
      this.setState({error: "Please choose a seating time"})
    }
  };

  cancelBooking = () => {
    this.setState({
      booking: false,
      chooseSeating: false,
      error: "",
      gdpr: false
    })
  }

  /* validateEmail = (email) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(email)){
      return true
    }
    return false
  } */

  validateBooking = () => {
    console.log(this.state.email)
   /*  if(this.validateEmail(this.state.email)){ */
      if(this.state.name !== "" && this.state.email !== "" && this.state.phone !== ""){
        this.book();
      } else {
        this.setState({error: "Please enter the required fields"})
      }
   /*  } else {
      this.setState({error: "Please enter a valid email adress"});
    } */
  };

  book = () => {
    let formValues = JSON.stringify(this.state);
    fetch(
      "http://localhost/restaurant/src/components/php/post.php?formData=" +
      formValues,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain"
        }
      }
    )
      .then(() => {
        console.log(this.state);
        this.setState({
          error: "",
          bookingComplete: true,
          booking: false,
          chooseSeating: false})
      });
  }

  render() {
    //console.log(this.state);
    let seating;
    this.state.chosenSeating === "firstSeating"
      ? (seating = "18:00")
      : (seating = "21:00");

    return (
      <div>
       
        <React.Fragment>
        <div className="form-container">
          {this.state.bookingComplete &&
          
          <div className="success">
            <p>Congratulations! You have booked a table at {this.state.date} {seating}</p>
          </div>  
          }

           {/*  <SearchForm
                dateChange={this.handleDateChange}
                dateValue={this.state.date}
                handleClick={this.searchForVacantSeatings}
              /> */}
          {!this.state.bookingComplete &&
          
          <SeatingForm  seatingTimes = {this.state.seatingTimes}
          chosenSeating = {this.state.chosenSeating}
          handleChange={this.handleChange}
          handleClick = {this.proceedBooking} /> 
          }
         
          <div className="error">
            <p>{this.state.error}</p>
          </div>
            
            {this.state.gdpr && (
              <Gdpr
                handleClick={this.agreeGdpr}
                handleCancel={this.cancelBooking}
              />
            )}

            {this.state.booking && (
              <UserForm
                handleChange={this.handleChange}
                handleClick={this.validateBooking}
                handleCancel={this.cancelBooking}
              />
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Book;
