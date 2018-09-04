import React from "react";
import BookingRow from "./BookingRow";
import ErrorMessage from "../../uiElements/ErrorMessage";

class BookingTable extends React.Component {
  render() {
    const searchInput = this.props.searchInput;
    let rows = [];
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
      .map(booking => (
        <BookingRow
          key={booking.bookingId}
          booking={booking}
          deleteBooking={this.props.deleteBooking}
          handleChange={this.props.handleChange}
        />
      ));

    if (rows.length > 0) {
      return (
        <div>
          <table>
            <tbody>
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
    } else {
      return (
        <ErrorMessage>
          <div>No bookings found </div>
        </ErrorMessage>
      );
    }
  }
}
export default BookingTable;
