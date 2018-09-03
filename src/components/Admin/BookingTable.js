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
        />
      ));
    return (
      <div>
        {rows}
      </div>

    );
  }
}
export default BookingTable;
