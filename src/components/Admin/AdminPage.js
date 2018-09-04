import React from "react";
import BookingTable from "./BookingTable";
import BookingSearchBox from "./BookingSearchBox";
import moment from 'moment';
import SearchForm from '../../uiElements/SearchForm';
import Error from '../../uiElements/ErrorMessage';

/* ADMIN PAGE FILE STRUCTURE:
**
**  AdminPage
**  ├── BookingSearchBox
**  └── BookingTable
**      └── BookingRow 
**          ├── DeleteBookingModal
**          └── EditBookingModal
**              └── EditBooking
**                  ├── EditBookingForm
**                  └── SeatingForm
**
*/

class AdminPage extends React.Component {
  state = {
    bookings: [],
    searchInput: "",
    bookingId: "",
    phone: "",
    error: false
  };

  handleDateChange = (date) => {
    let today = moment();
    let selecedDate = moment(date);
    if (selecedDate <= today) {
        this.setState({
            error: true
        })
    } else {
        date = date.format('YYYY-MM-DD');
        localStorage.setItem('date', date);
        this.setState({
            error: false
        })
    }
  };

  navigate = () => {
    this.props.history.push('/bookatable');
  }

  componentDidMount() {
    this.getBookingsFromApi();
    let date = moment().format("YYYY-MM-DD");
    localStorage.setItem('date', date);
  }

  handleChange = () => {
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

      <div className="admin-booking">       
        {this.state.error &&
          <Error>This date is in the past, try again!</Error>
        }
        <SearchForm handleChange={this.handleDateChange}
            handleClick={this.navigate}
            dateValue={moment()}
            className={"search-container"} />
      </div> 

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
