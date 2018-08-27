import React from "react";
import DeleteBookingModal from "./DeleteBookingModal";

class BookingRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.handleClick = this.handleClick.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleClick = () => {
    this.setState({ show: false });
    this.props.deleteBooking(
      this.props.booking.phone,
      this.props.booking.bookingId
    );
  };

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
        <td>
          <button className="btn btn-secondary">Edit</button>
        </td>
        <td>
          <DeleteBookingModal
            show={this.state.show}
            handleClose={this.hideModal}
            handleConfirm={this.handleClick}
          >
            <p>Booking ID: {booking.bookingId}</p>
            <p>Date: {booking.date}</p>
            <p>Seating time: {booking.seatingOne == 1 ? "18:00" : "21:00"}</p>
            <p>Name: {booking.name}</p>
            <p>Phone: {booking.userPhone}</p>
            <p>Email: {booking.email}</p>
          </DeleteBookingModal>
          <button onClick={this.showModal} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default BookingRow;
