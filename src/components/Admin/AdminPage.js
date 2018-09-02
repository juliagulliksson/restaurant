import React from "react";
import BookingTable from "./BookingTable";
import BookingSearchBox from "./BookingSearchBox";

/* ADMIN PAGE FILE STRUCTURE:
**
**  AdminPage
**  ├── BookingSearchBox
**  └── BookingTable
**      └── BookingRow 
**          ├── DeleteBookingModal
**          └── EditBookingModal
**              └── EditBookingForm
*/

class AdminPage extends React.Component {
  state = {
    bookings: [],
    searchInput: "",
    bookingId: "",
    //date: "",
    //name: "",
    phone: "",
    //seatingOne: "",
    //seatingTwo: "",
    //email: ""
  };

  componentDidMount() {
    this.getBookingsFromApi();
  }

     handleDateChange = date => {
    date = date.format("YYYY-MM-DD");
    this.setState({ date: date });
  };

  handleChange = event => {
    //Update all input field states based on their HTML names
   /*  this.setState({bookings:[...this.state.bookings, event.target.value]});
    //this.setState({ bookings:[[0][event.target.name]: event.target.value] });
    console.log(event) */
    this.getBookingsFromApi();
  };   

  handleSearchInputChange = searchInput => {
    this.setState({
      searchInput: searchInput
    });
  };

  sendConfirmationEmail = bookingInfo => {
    bookingInfo = JSON.stringify(bookingInfo);

    fetch(
      "http://localhost/restaurant/src/components/php/sendConfirmationEmail.php?data=" +
      bookingInfo,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  };

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

  deleteBooking = bookingInfo => {
    let newBookings = "";
    console.log(bookingInfo);

    let bookingData = JSON.stringify({
      phone: bookingInfo.phone,
      bookingId: bookingInfo.bookingId
    });

    fetch(
      "http://localhost/restaurant/src/components/php/deletebooking.php?data=" +
      bookingData,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      }
    )
      .then(() => {
        newBookings = this.state.bookings.filter(
          booking => booking.userPhone !== bookingInfo.phone
        );
      })
      .then(() => {
        this.state.bookings.map(booking =>
          this.setState({
            bookings: newBookings
          })
        );
        this.sendConfirmationEmail(bookingInfo);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <BookingSearchBox
          searchInput={this.state.searchInput}
          onSearchInputChange={this.handleSearchInputChange}
        />
        <BookingTable
          bookings={this.state.bookings}
          searchInput={this.state.searchInput}
          deleteBooking={this.deleteBooking}
          update={this.update}
          handleChange={this.handleChange}
          handleDateChange={this.handleDateChange}
        />
      </div>
    );
  }
}
export default AdminPage;
