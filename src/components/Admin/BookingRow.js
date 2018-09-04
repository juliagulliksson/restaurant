
import React from "react";
import DeleteBookingModal from "./DeleteBookingModal";
import EditBookingModal from "./EditBookingModal";

class BookingRow extends React.Component {
  state = { 
    showDelete: false,
    showEdit: false,
    seatingTimes: {
      seatingOne: "",
      seatingTwo: ""
    }
   };

   componentDidMount = () => {
    let formValues = JSON.stringify(this.props.booking.date);
    fetch(
      `http://localhost/restaurant/src/components/php/search.php?formData=
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
        this.setSeating(response);
      });
  };

  setSeating = response => {
    this.setState({
      seatingTimes: {
        seatingOne: response.seatingOne,
        seatingTwo: response.seatingTwo
      }
    });
  };

  showEditModal = () => {
    this.setState({ showEdit: true });
  };

  hideEditModal = () => {
    this.setState({ showEdit: false });
  };

  hideDeleteModal = () => {
    this.setState({ showDelete: false });
  };

  showDeleteModal = () => {
    this.setState({ showDelete: true });
  };

  handleDelete = () => {
    this.setState({ show: false });
    this.props.deleteBooking(this.props.booking);
  };

  render() {
    const booking = this.props.booking;
    return (
    <tr>
      <td>{booking.bookingId}</td>
      <td>{booking.date}</td>
       <td>{booking.seatingOne === "1" ? "18:00" : "21:00"}</td> 
      <td>{booking.name}</td>
      <td>{booking.userPhone}</td>
      <td>{booking.email}</td>
      <td>
        <EditBookingModal 
                show={this.state.showEdit}
                handleClose={this.hideEditModal}
                handleConfirm={this.handleEdit}
                booking={booking}
                handleChange={this.props.handleChange}
                handleDateChange={this.props.handleDateChange}
                seatingTimes={this.state.seatingTimes}
        />
      <button className="btn btn-secondary" onClick={this.showEditModal}>Edit</button>
    </td>
    <td>
      <DeleteBookingModal
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
        </button>
     
    </td>
    </tr>
    );
  }
}
export default BookingRow;
