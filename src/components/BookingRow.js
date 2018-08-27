import React from "react";
import DeleteBookingModal from "./DeleteBookingModal";
import EditBookingModal from "./EditBookingModal";
import EditBookingForm from "../uiElements/EditBookingForm";

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
    this.props.deleteBooking(
      this.props.booking.phone,
      this.props.booking.bookingId
    );
  };

  handleEdit = () => {
    console.log("EditFunction");
  };

  handleFormChange = () => {};

  render() {
    const booking = this.props.booking;

    return (
      <tr>
        <td>{booking.bookingId}</td>
        <td>{booking.date}</td>
        <td>{booking.seatingOne === 1 ? "18:00" : "21:00"}</td>
        <td>{booking.name}</td>
        <td>{booking.userPhone}</td>
        <td>{booking.email}</td>
        <td>
          <EditBookingModal
            show={this.state.showEdit}
            handleClose={this.hideEditModal}
            handleConfirm={this.handleEdit}
          >
            <p>Booking ID: {booking.bookingId}</p>
            <EditBookingForm
              booking={booking}
              onDateChange={this.onDateChange}
            />
          </EditBookingModal>
          <button onClick={this.showEditModal} className="btn btn-secondary">
            Edit
          </button>
        </td>
        <td>
          <DeleteBookingModal
            show={this.state.showDelete}
            handleClose={this.hideDeleteModal}
            handleConfirm={this.handleDelete}
          >
            <p>Booking ID: {booking.bookingId}</p>
            <p>Date: {booking.date}</p>
            <p>Seating time: {booking.seatingOne === 1 ? "18:00" : "21:00"}</p>
            <p>Name: {booking.name}</p>
            <p>Phone: {booking.userPhone}</p>
            <p>Email: {booking.email}</p>
          </DeleteBookingModal>
          <button onClick={this.showDeleteModal} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default BookingRow;
