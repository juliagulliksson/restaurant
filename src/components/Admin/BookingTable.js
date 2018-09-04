import React from "react";
import BookingRow from "./BookingRow";
import ErrorMessage from "../../uiElements/ErrorMessage";

class BookingTable extends React.Component {

  state = {
    showDelete: false,
    showEdit: false
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

  render() {
    const searchInput = this.props.searchInput;
    let rows = [];
    console.log(this.props.bookings);

    rows = this.props.bookings
      .filter(booking => {
        return (
          booking.name.toLowerCase().indexOf(searchInput.toLowerCase()) !==
            -1 ||
          booking.phone.toLowerCase().indexOf(searchInput.toLowerCase()) !==
            -1 ||
          booking.email.toLowerCase().indexOf(searchInput.toLowerCase()) !==
            -1 ||
          booking.bookingId.toLowerCase().indexOf(searchInput.toLowerCase()) !==
            -1 ||
          booking.date.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        );
      })
    console.log(rows.length);
    if (rows.length > 0) {
      return (
        <div className="admin-table">
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-1">
              <p>ID</p>
              {rows.map(booking => (<p key={booking.bookingId}>{booking.bookingId}</p>))}
            </div>
            <div className="col-md-2">
              <p>Date</p>
              {rows.map(booking => (<p key={booking.bookingId}>{booking.date}</p>))}
            </div>
            <div className="col-md-1">
              <p>Time</p>
              {rows.map(booking => (<p key={booking.bookingId}>{booking.seatingOne === "1" ? "18:00" : "21:00"}</p>))}
            </div> 
            <div className="col-md-2">
              <p>Name</p>
              {rows.map(booking => (<p key={booking.bookingId}>{booking.name}</p>))}
            </div>
            <div className="col-md-1">
              <p>Phone</p>
              {rows.map(booking => (<p key={booking.bookingId}>{booking.phone}</p>))}
            </div>
            <div className="col-md-3">
              <p>Email</p>
              {rows.map(booking => (<p key={booking.bookingId}>{booking.email}</p>))}
            </div>
            <div className="col-md-1">
              <span className="button-header">{" "}</span>
              {rows.map(booking => ( <button onClick={this.showDeleteModal} 
                key={booking.bookingId} className="btn btn-danger">
                  Delete
                </button>))}

                {rows.map(booking => (    
                <BookingRow 
                        showEdit={this.state.showEdit}
                        showDelete={this.state.showDelete}
                        hideEdit={this.hideEditModal}
                        hideDelete={this.hideDeleteModal}
                        key={booking.bookingId}
                        booking={booking}
                        deleteBooking={this.props.deleteBooking}
                        handleChange={this.props.handleChange}  />
              ))}
              
            </div>
            <div className="col-md-1 col-sm-12">
              <span className="button-header">{" "}</span>
              {rows.map(booking => ( <button onClick={this.showEditModal} 
              key={booking.bookingId} className="btn btn-secondary">
                  Edit
                </button>))}
            </div>
        
            </div>
          </div>

        </div>
      );
    } else {
      //error message
      return <ErrorMessage>{<div>No bookings found</div>}</ErrorMessage>;
    }
  }
}
export default BookingTable;
