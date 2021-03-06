import React, { Component } from "react";
import SeatingForm from "../uiElements/SeatingForm";
import Gdpr from "../uiElements/Gdpr";
import UserForm from "../uiElements/UserForm";
import SearchForm from "../uiElements/SearchForm";
import moment from "moment";
import Button from "../uiElements/Button";
import SuccessMessage from "../uiElements/SuccessMessage";
import ErrorMessage from "../uiElements/ErrorMessage";

class Book extends Component {
  state = {
    date: localStorage.getItem("date"),
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

  handleDateChange = date => {
    let today = moment();
    let selecedDate = moment(date);
    if (selecedDate <= today) {
      this.setState({ error: "This date is in the past. Try again!" });
    } else {
      date = date.format("YYYY-MM-DD");
      localStorage.setItem("date", date);
      this.setState({ date: date, error: "" });
    }
  };

  changeDate = () => {
    this.setState({ changeDate: true, chooseSeating: false });
  };

  fetchGetRequest = (fileName, object, thenFunction) => {
    let formValues = JSON.stringify(object);
    fetch(
      `http://localhost/restaurant/src/components/php/${fileName}.php?formData=
      ${formValues}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        thenFunction(response);
      });
  };

  mail = () => {

    let mailValues = JSON.stringify({
      "name": this.state.name,
      "email": this.state.email,
      "phone": this.state.phone,
      "date": this.state.date,
      "chosenSeating": this.state.chosenSeating
    }
    )

    fetch(
      "http://localhost/restaurant/src/components/php/confirmBookingEmail.php?mailData=" +
      mailValues,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain"
        }
      }
    )
  }

  searchForVacantSeatings = () => {
    this.fetchGetRequest("search", this.state.date, this.setSeating);
  };

  setSeating = response => {
    this.setState({
      seatingTimes: {
        seatingOne: response.seatingOne,
        seatingTwo: response.seatingTwo
      },
      chooseSeating: true,
      error: ""
    });
  };

  agreeGdpr = () => {
    this.setState({
      gdpr: false,
      booking: true
    });
  };

  proceedBooking = () => {
    if (this.state.chosenSeating !== "") {
      this.setState({ error: "", gdpr: true });
    } else {
      this.setState({ error: "Please choose a seating time" });
    }
  };

  cancelBooking = () => {
    this.setState({
      booking: false,
      chooseSeating: false,
      error: "",
      gdpr: false,
      changeDate: true,
      chosenSeating: ""
    });
  };

  validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  validateForm = () => {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.phone !== "" &&
      !isNaN(this.state.phone)
    ) {
      return true;
    }
    return false;
  };

  validateBooking = () => {
    if (this.validateForm()) {
      if (this.validateEmail(this.state.email)) {
        this.book();
      } else {
        this.setState({ error: "Please enter a valid email adress" });
      }
    } else {
      this.setState({ error: "Please enter the required fields" });
    }
  };

  book = () => {
    this.fetchGetRequest("post", this.state, this.setBookingCompleteStates);
    this.mail();
  };

  setBookingCompleteStates = () => {
    this.setState({
      error: "",
      bookingComplete: true,
      booking: false,
      chooseSeating: false,
      changeDate: false
    });
  };

  componentDidMount = () => {
    this.searchForVacantSeatings();
  }

  render() {

    return (
      <div>
        <React.Fragment>
          {this.state.bookingComplete && (
            <SuccessMessage date={this.state.date} seating={this.state.chosenSeating} />
          )}
          {!this.state.changeDate &&
            !this.state.bookingComplete && (
              <Button handleClick={this.changeDate}>Change date</Button>
            )}

          {this.state.changeDate && (
            <SearchForm
              handleChange={this.handleDateChange}
              dateValue={moment(this.state.date)}
              handleClick={this.searchForVacantSeatings}
              className="search-container"
              buttonText="Search for vacant tables"
            />
          )}

          <div className="form-container">
            <form>
              {this.state.chooseSeating && (
                <SeatingForm
                  seatingTimes={this.state.seatingTimes}
                  handleChange={this.handleChange}
                  handleClick={this.proceedBooking}
                  firstSeatingDefault={null}
                  secondSeatingDefault={null}
                />
              )}
            </form>

            {this.state.error !== "" &&
              <ErrorMessage>{this.state.error}</ErrorMessage>
            }

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
