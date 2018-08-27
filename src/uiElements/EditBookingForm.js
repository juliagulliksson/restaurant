import React from "react";
import Date from "./DatePicker";
import moment from "moment";

export default function EditBookingForm(props) {
  let booking = props.booking;

  return (
    <React.Fragment>
      <form>
        <label className="editField" htmlFor="date">
          Date
        </label>
        <Date value={moment(booking.date)} handleChange={props.onDateChange} />

        <br />
        <label className="editField" htmlFor="seating">
          Time
        </label>
        <input
          className="editField"
          type="text"
          name="seating"
          defaultValue={booking.seatingOne == 1 ? "18:00" : "21:00"}
        />
        <br />
        <label className="editField" htmlFor="name">
          Name
        </label>
        <input
          className="editField"
          type="text"
          name="name"
          defaultValue={booking.name}
        />
        <br />
        <label className="editField" htmlFor="phone">
          Phone
        </label>
        <input
          className="editField"
          type="text"
          name="phone"
          defaultValue={booking.userPhone}
        />
        <br />
        <label className="editField" htmlFor="email">
          Email
        </label>
        <input
          className="editField"
          type="text"
          name="email"
          defaultValue={booking.email}
        />
      </form>
    </React.Fragment>
  );
}
