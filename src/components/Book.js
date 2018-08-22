import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SeatingForm from "./SeatingForm";
import Gdpr from "../uiElements/gdpr";
import UserForm from "./UserForm";
import moment from "moment";

class Book extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
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

    bookingComplete: false
  };

  handleChange = event => {
    //Update all input field states based on their HTML names
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    const selectedDate = date.format("YYYY-MM-DD");
    this.setState({ date: selectedDate });
  };

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
      gdpr: true
    })
  }

  disagreeGdpr = () => {
    this.setState({
      allowedToBook: false
    })
  }

  proceedBooking = () => {
    this.setState({
      booking: true,
      gdpr: false
    });
  };

  cancelBooking = () => {
    this.setState({
      booking: false,
      chooseSeating: false,
      gdpr: false
    });
  };

  book = () => {
    console.log(this.state);
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
    ).then(() => {
      this.setState({
        bookingComplete: true,
        booking: false,
        chooseSeating: false,
        gdpr: false
      });
    });
  };

  render() {
    let seating;
    this.state.chosenSeating === "firstSeating"
      ? (seating = "18:00")
      : (seating = "21:00");

    return (
      <div>
        <React.Fragment>
          {this.state.bookingComplete ? (
            <div className="success">
              <p>
                Congratulations! You have booked a table at {this.state.date}{" "}
                {seating}
              </p>
            </div>
          ) : (
              <SearchForm
                dateChange={this.handleDateChange}
                dateValue={this.state.date}
                handleClick={this.searchForVacantSeatings}
              />
            )}

          {this.state.chooseSeating && (
            <SeatingForm
              seatingTimes={this.state.seatingTimes}
              chosenSeating={this.state.chosenSeating}
              handleChange={this.handleChange}
              handleClick={this.agreeGdpr}
            />
          )}

          {this.state.gdpr && (
            <Gdpr
              handleClick={this.proceedBooking}
              handleCancel={this.cancelBooking}
            />
          )}

          {this.state.booking && (
            <UserForm
              handleChange={this.handleChange}
              handleClick={this.book}
              handleCancel={this.cancelBooking}
            />
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default Book;
