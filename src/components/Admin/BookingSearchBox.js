import React from "react";

class BookingSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(e) {
    this.props.onSearchInputChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search bookings..."
          value={this.props.searchInput}
          onChange={this.handleSearchInputChange}
        />
      </form>
    );
  }
}

export default BookingSearchBox;
