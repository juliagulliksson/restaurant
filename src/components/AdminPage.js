import React from "react";
import AdminSearchForm from "./AdminPage";

class AdminPage extends React.Component {
  state = {
    bookings: [],
    seating: []
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
          <tr key={booking.bookingId}>
            <td>{booking.bookingId}</td>
            <td>{booking.date}</td>
            <td>{booking.seatingOne}</td>
            <td>{booking.seatingOne}</td>
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
          <tbody>
            <tr>
              <th>Booking ID</th>
              <th>Date</th>
              <th>18:00</th>
              <th>21:00</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </tbody>
          <tbody>{this.displayBookings()}</tbody>
        </table>
      </div>
    );
  }
}
export default AdminPage;
