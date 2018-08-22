import React from "react";
import AdminSearchForm from "./AdminSearchForm";
import Button from "./Button";

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
      return (
        this.state.bookings
          // .filter(booking => {
          //   return booking.name === "Poodle"; //state variable for name
          // })
          .map(booking => {
            return (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.date}</td>
                <td>{booking.seatingOne == 1 ? "18:00" : "21:00"}</td>
                <td>{booking.name}</td>
                <td>{booking.userPhone}</td>
                <td>{booking.email}</td>
                <td>
                  <Button />
                </td>
                <td>
                  <Button />
                </td>
              </tr>
            );
          })
      );
    }
  };

  render() {
    return (
      <div>
        <AdminSearchForm />
        <br />
        <h2>Current Bookings</h2>
        <br />
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
          <tbody>{this.displayBookings()}</tbody>
        </table>
      </div>
    );
  }
}
export default AdminPage;
