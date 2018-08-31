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
       <div className="form-group admin-search">
          <input
            type="text"
            placeholder="Search bookings..."
            value={this.props.searchInput}
            onChange={this.handleSearchInputChange}
            className="form-control"
          />
        </div>
      </form>
    );
  }
}

export default BookingSearchBox;
