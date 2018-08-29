import React, { Component } from "react";
import SeatingForm from "../uiElements/SeatingForm";
import Gdpr from "../uiElements/Gdpr";
import UserForm from "../uiElements/UserForm";
import SearchForm from "../uiElements/SearchForm";
import moment from 'moment';
import Button from '../uiElements/Button';

class Book extends Component {
  state = {
    date: localStorage.getItem('date'),
    chooseSeating: true,
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
    error: "",
    changeDate: false
  };

  handleChange = event => {
    //Update all input field states based on their HTML names
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = (date) => {
    let today = moment();
    let selecedDate = moment(date);
    if (selecedDate <= today) {
      this.setState({ error: "This date is in the past. Try again!" })
    } else {
      date = date.format('YYYY-MM-DD');
      localStorage.setItem( 'date', date); 
      this.setState({ date: date, error: "" });
    }
  }; 

  changeDate = () => {
    this.setState({ changeDate: true, chooseSeating: false });
  }

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
    if (this.state.chosenSeating !== "") {
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

  validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validateForm = () => {
    if (this.state.name !== "" && this.state.email !== "" 
    && this.state.phone !== "" && !isNaN(this.state.phone)) {
      return true;
    } return false;
  }

  validateBooking = () => {
    if (this.validateForm()) { 
      if (this.validateEmail(this.state.email)) {
        this.book();
      } else {
        this.setState({error: "Please enter a valid email adress"});
      }
    } else {
      this.setState({error: "Please enter the required fields"});
    } 
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
      this.setState({
        error: "",
        bookingComplete: true,
        booking: false,
        chooseSeating: false,
        changeDate: false})
    });
  }

  render() {
    let seating;
    this.state.chosenSeating === "firstSeating"
      ? (seating = "18:00")
      : (seating = "21:00");

    return (
      <div>
       
        <React.Fragment>
        
          {this.state.bookingComplete &&
          
          <div className="success">
            <p>Congratulations! You have booked a table at {this.state.date} {seating}</p>
          </div>  
          }
          {!this.state.changeDate && !this.state.bookingComplete && 
           <Button handleClick={this.changeDate}>Change date</Button>
          }
         
          {this.state.changeDate && 
          <SearchForm handleChange={this.handleDateChange}
                      dateValue={moment(this.state.date)}
                      handleClick={this.searchForVacantSeatings}
                      className="search-container"
          />
          }
          
          <div className="form-container">
          {this.state.chooseSeating &&
          
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
