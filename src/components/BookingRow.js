import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

class BookingRow extends React.Component {
  render() {
    const booking = this.props.booking;

    return (
      <tr>
        <td>{booking.bookingId}</td>
        <td>{booking.date}</td>
        <td>{booking.seatingOne == 1 ? "18:00" : "21:00"}</td>
        <td>{booking.name}</td>
        <td>{booking.userPhone}</td>
        <td>{booking.email}</td>
        <td>{<ButtonDelete>Delete</ButtonDelete>}</td>
        <td>{<ButtonEdit>Edit</ButtonEdit>}</td>
      </tr>
    );
  }
}

export default BookingRow;
