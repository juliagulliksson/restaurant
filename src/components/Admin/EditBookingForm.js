import React, { Component } from "react";
import Date from "../../uiElements/DatePicker";
import moment from "moment";

export default class EditBookingForm extends Component {
  state = {
    name: this.props.booking.name,
    phone: this.props.booking.phone,
    email: this.props.booking.email,
    date: this.props.booking.date,
    seatingOne: this.props.booking.seatingOne,
    seatingTwo: this.props.booking.seatingTwo,
    chosenSeating: "",
    bookingId: this.props.booking.bookingId
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

  handleSave = () => {
    let formValues = JSON.stringify({
      "phone" : this.state.phone,
      "date" : this.state.date,
      "email" : this.state.email,
      "name" : this.state.name,
      "bookingId": this.state.bookingId,
      "chosenSeating" : this.state.chosenSeating,
      "originalPhoneNumber" : this.props.booking.phone
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
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        //Close the edit popup
        this.props.handleClose();
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

          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                value="firstSeating"
                name="chosenSeating"
                onChange={this.handleChange}
                defaultChecked={
                  this.props.booking.seatingOne === "1" ? true : false
                }
              />
              18:00
            </label>
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="chosenSeating"
                onChange={this.handleChange}
                value="secondSeating"
                defaultChecked={
                  this.props.booking.seatingTwo === "1" ? true : false
                }
              />
              21:00
            </label>
          </div>

          <br />

          <label className="editField" htmlFor="name">
            Name
          </label>
          <input
            className="editField"
            type="text"
            name="name"
            defaultValue={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label className="editField" htmlFor="phone">
            Phone
          </label>
          <input
            className="editField"
            type="text"
            name="phone"
            defaultValue={this.state.phone}
            onChange={this.handleChange}
          />
          <br />
          <label className="editField" htmlFor="email">
            Email
          </label>
          <input
            className="editField"
            type="text"
            name="email"
            defaultValue={this.state.email}
            onChange={this.handleChange}
          />
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
