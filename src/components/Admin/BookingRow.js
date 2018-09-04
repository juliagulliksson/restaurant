import React from "react";
import DeleteBookingModal from "./DeleteBookingModal";
import EditBookingModal from "./EditBookingModal";

class BookingRow extends React.Component {
  

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

        <EditBookingModal
          show={this.props.showEdit}
          handleClose={this.props.hideEdit}
          handleConfirm={this.handleEdit}
          booking={booking}
          handleChange={this.props.handleChange}
          handleDateChange={this.props.handleDateChange}
        />

        <DeleteBookingModal
          show={this.props.showDelete}
          handleClose={this.props.hideDelete}
          handleConfirm={this.handleDelete}
        >
          <p>Booking ID: {booking.bookingId}</p>
          <p>Date: {booking.date}</p>
          <p>Seating time: {booking.seatingOne === "1" ? "18:00" : "21:00"}</p>
          <p>Name: {booking.name}</p>
          <p>Phone: {booking.userPhone}</p>
          <p>Email: {booking.email}</p>
        </DeleteBookingModal>

       

      </div>
    );
  }
}

export default BookingRow;
