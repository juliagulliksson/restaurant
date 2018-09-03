import React from "react";
import BookingRow from "./BookingRow";

class BookingTable extends React.Component {
  render() {
    const searchInput = this.props.searchInput;
    let rows = [];
    //console.log(this.props.bookings);

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
            -1
        );
      })
      .map(booking => (
        <BookingRow
          key={booking.bookingId}
          booking={booking}
          deleteBooking={this.props.deleteBooking}
          handleChange={this.props.handleChange}
        />
      ));
    console.log(rows.length);
    if (rows.length > 0) {
      return (
        <div>
          <div className="table-header-desktop">
            <ul>
              <li>Booking ID</li>
              <li>Date</li>
              <li>Time</li>
              <li>Name</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>

          <div className="table-content-wrapp">{rows}</div>
        </div>
      );
    } else {
      //error message
      return <div>No bookings found </div>;
    }
  }
}
export default BookingTable;
