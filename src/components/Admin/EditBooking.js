import React, { Component } from "react";
import Date from "../../uiElements/DatePicker";
import moment from "moment";
import SeatingForm from '../../uiElements/SeatingForm';
import EditBookingForm from '../../uiElements/EditBookingForm';

export default class EditBooking extends Component {
  state = {
    name: this.props.booking.name,
    phone: this.props.booking.phone,
    email: this.props.booking.email,
    date: this.props.booking.date,
    seatingOne: this.props.booking.seatingOne,
    seatingTwo: this.props.booking.seatingTwo,
    chosenSeating: "",
    bookingId: this.props.booking.bookingId,
    seatingTimes: {
      seatingOne: "",
      seatingTwo: ""
    }
  };

  handleDateChange = date => {
    date = date.format("YYYY-MM-DD");
    this.setState({ date: date });
  };

  handleChange = event => {
    //Update all input field states based on their HTML names
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCancel = () => {
    //Reset to the original states
    this.setState({
      name: this.props.booking.name,
      phone: this.props.booking.phone,
      email: this.props.booking.email,
      date: this.props.booking.date,
      seatingOne: this.props.booking.seatingOne,
      seatingTwo: this.props.booking.seatingTwo
    });
    //Close the edit popup
    this.props.handleClose();
  };

  handleSave = (event) => {
    let formValues = JSON.stringify({
      "phone": this.state.phone,
      "date": this.state.date,
      "email": this.state.email,
      "name": this.state.name,
      "bookingId": this.state.bookingId,
      "chosenSeating": this.state.chosenSeating,
      "originalPhoneNumber": this.props.booking.phone
    });
    fetch(
      `http://localhost/restaurant/src/components/php/edit.php?formData=
      ${formValues}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain"
        }
      }
    )
      .then(() => {
        //Close the edit popup
        this.props.handleClose();
        //Get the edited bookings in AdminPage.js
        this.props.handleChange();
      });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label className="editField" htmlFor="date">
            Date
          </label>
          <Date
            value={moment(this.props.booking.date)}
            handleChange={this.handleDateChange}
          />

          <br />

          <SeatingForm
            firstSeatingDefault={this.props.booking.seatingOne === "1" ? true : false}
            secondSeatingDefault={this.props.booking.seatingTwo === "1" ? true : false}
            seatingTimes={this.state.seatingTimes}
            handleChange={this.handleChange}
            admin={true}
          />
          <br />

          <EditBookingForm
            defaultName={this.state.name}
            defaultPhone={this.state.phone}
            defaultEmail={this.state.email}
            handleChange={this.handleChange} />


        </form>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleSave}
          >
            Save
          </button>
          <button
            onClick={this.handleCancel}
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
        </div>
      </React.Fragment>
    );
  }
}
