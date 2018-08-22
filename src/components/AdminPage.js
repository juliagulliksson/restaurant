import React from "react";

class AdminPage extends React.Component {
  state = {
    bookings: []
  };

  componentDidMount() {
    this.getBookingsFromApi();
  }

  getBookingsFromApi = () => {
    fetch("http://localhost/restaurant/src/components/php/fetchbookings.php")
      .then(response => response.json())
      .then(bookings => {
        this.setState({ bookings });
        console.log(bookings);
      })
      .catch(error => {
        console.log(error);
      });
  };

  displayBookings = () => {
    if (!this.state.bookings) {
      console.log("No bookings found");
      return;
    } else {
      return this.state.bookings.map(booking => {
        return (
          // <ul key={booking.bookingId}>
          //   <h3>Booking Ref: {booking.bookingId} </h3>
          //   <li>Date: {booking.date}</li>
          //   <li>Seating one: {booking.seatingOne}</li>
          //   <li>Seating two: {booking.seatingTwo}</li>
          //   <li>Name: {booking.name}</li>
          //   <li>Tel number: {booking.userPhone}</li>
          //   <li>Email: {booking.email}</li>
          // </ul>

          <tr key={booking.bookingId}>
            <td>{booking.bookingId}</td>
            <td>{booking.date}</td>
            <td>{booking.seatingOne}</td>
            <td>{booking.seatingTwo}</td>
            <td>{booking.name}</td>
            <td>{booking.userPhone}</td>
            <td>{booking.email}</td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Current Bookings</h2>

        <table>
          <tr>
            <th>Booking ID</th>
            <th>Date</th>
            <th>18:00</th>
            <th>21:00</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>

          <tbody>{this.displayBookings()}</tbody>
        </table>
      </div>
    );
  }
}
export default AdminPage;
