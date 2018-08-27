import React from "react";
import BookingTable from "./BookingTable";
import BookingSearchBox from "./BookingSearchBox";
//import ButtonEdit from "./ButtonEdit";
//import ButtonDelete from "./ButtonDelete";

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
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      searchInput: "",
      bookingId: "",
      date: "",
      name: "",
      phone: "",
      seatingOne: "",
      seatingTwo: "",
      email: ""
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  componentDidMount() {
    this.getBookingsFromApi();
  }

  handleSearchInputChange(searchInput) {
    this.setState({
      searchInput: searchInput
    });
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

  deleteBooking = (phone, bookingId) => {
    let newBookings = "";

    let bookingData = JSON.stringify({ phone: phone, bookId: bookingId });

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
          booking => booking.userPhone !== phone
        );
      })
      .then(() => {
        this.state.bookings.map(booking =>
          this.setState({
            bookings: newBookings
          })
        );
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
        />
      </div>
    );
  }
}
export default AdminPage;
