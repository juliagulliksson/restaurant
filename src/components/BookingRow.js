import React from "react";

class BookingRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("click");
    this.props.deleteBooking(this.props.booking.phone);
  };

  render() {
    const booking = this.props.booking;
    //const phone = this.props.phone;

    return (
      <tr>
        <td>{booking.bookingId}</td>
        <td>{booking.date}</td>
        <td>{booking.seatingOne == 1 ? "18:00" : "21:00"}</td>
        <td>{booking.name}</td>
        <td>{booking.userPhone}</td>
        <td>{booking.email}</td>
        <td>
          <button
            /*handleClick={this.agreeGdpr}*/ className="btn btn-secondary"
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={() => this.props.deleteBooking(booking.userPhone)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default BookingRow;
