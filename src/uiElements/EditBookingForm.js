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

        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="firstSeating"
              name="chosenSeating"
              onChange={props.handleChange}
              defaultChecked={booking.seatingOne === "1" ? true : false}
            />
            18:00
          </label>
        </div>

        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              /*value="secondSeating"*/
              name="chosenSeating"
              onChange={props.handleChange}
              defaultChecked={booking.seatingTwo === "1" ? true : false}
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
