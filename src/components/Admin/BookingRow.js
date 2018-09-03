import React from "react";
import DeleteBookingModal from "./DeleteBookingModal";
import EditBookingModal from "./EditBookingModal";

class BookingRow extends React.Component {
  state = {
    showDelete: false,
    showEdit: false
  };

  onDateChange = date => {
    console.log(date);
  };

  showDeleteModal = () => {
    this.setState({ showDelete: true });
  };

  hideDeleteModal = () => {
    this.setState({ showDelete: false });
  };

  showEditModal = () => {
    this.setState({ showEdit: true });
  };

  hideEditModal = () => {
    this.setState({ showEdit: false });
  };

  handleDelete = () => {
    this.setState({ showDelete: false });
    let seatingTime;
    this.props.booking.seatingOne === 1
      ? (seatingTime = "18:00")
      : (seatingTime = "21:00");

    let bookingInfo = {
      phone: this.props.booking.phone,
      bookingId: this.props.booking.bookingId,
      email: this.props.booking.email,
      date: this.props.booking.date,
      name: this.props.booking.name,
      seatingTime: seatingTime
    };
    this.props.deleteBooking(bookingInfo);
  };

  render() {
    const booking = this.props.booking;

    return (
      <div className="booking-content">
        <ul>
          <li>ID: {booking.bookingId}</li>
          <li>Date; {booking.date}</li>
          <li>Time : {booking.seatingOne === "1" ? "18:00" : "21:00"}</li>
          <li>Name: {booking.name}</li>
          <li>Phone: {booking.userPhone}</li>
          <li>Email: {booking.email}</li>
          <li><EditBookingModal
            show={this.state.showEdit}
            handleClose={this.hideEditModal}
            handleConfirm={this.handleEdit}
            booking={booking}
            handleChange={this.props.handleChange}
            handleDateChange={this.props.handleDateChange}
          />
            <button onClick={this.showEditModal} className="btn btn-secondary">
              Edit
                </button> </li>
          <li><DeleteBookingModal
            show={this.state.showDelete}
            handleClose={this.hideDeleteModal}
            handleConfirm={this.handleDelete} >
            <p>Booking ID: {booking.bookingId}</p>
            <p>Date: {booking.date}</p>
            <p>
              Seating time: {booking.seatingOne === "1" ? "18:00" : "21:00"}
            </p>
            <p>Name: {booking.name}</p>
            <p>Phone: {booking.userPhone}</p>
            <p>Email: {booking.email}</p>
          </DeleteBookingModal>
            <button onClick={this.showDeleteModal} className="btn btn-danger">
              Delete
                </button></li>
        </ul>
      </div>
    );
  }
}

export default BookingRow;
