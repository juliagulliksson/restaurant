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
*/

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      searchInput: ""
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
        />
      </div>
    );
  }
}
export default AdminPage;
