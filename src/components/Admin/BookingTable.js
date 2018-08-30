import React from "react";
import BookingRow from "./BookingRow";
import BookingRowMobile from "./BookingRowMobile";

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
        <React.Fragment>
          <BookingRow
            key={booking.bookingId}
            booking={booking}
            deleteBooking={this.props.deleteBooking}
          />
          <BookingRowMobile

            key={booking.bookingId}
            booking={booking}
            deleteBooking={this.props.deleteBooking}
          />
        </React.Fragment>
      ));
    return (
      <div>
        <table>
          <tbody className="desktop">
            <tr>
              <th>Booking ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </tbody>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
export default BookingTable;
