import React from "react";
import BookingRow from "./BookingRow";

class BookingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchInput = this.props.searchInput;
    let rows = [];

    rows = this.props.bookings
      .filter(booking => {
        return (
          booking.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        );
      })
      .map(booking => (
        <BookingRow
          key={booking.bookingId}
          booking={booking}
          deleteBooking={this.props.deleteBooking}
        />
      ));

    // addBookingToState = () => {
    //   this.setState({
    //     bookingId: booking.booking.Id,
    //     date: booking.date,
    //     name: booking.name,
    //     phone: booking.phone,
    //     seatingOne: booking.seatingOne,
    //     seatingTwo: booking.seatingTwo,
    //     email: booking.email
    //   });
    // };

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
  }
}
export default BookingTable;
