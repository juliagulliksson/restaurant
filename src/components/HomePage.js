import React, { Component } from "react";
import SearchForm from "../uiElements/SearchForm";
import moment from "moment";
import Error from "../uiElements/ErrorMessage";

export default class Home extends Component {
  state = {
    error: false
  };

  handleDateChange = date => {
    let today = moment();
    let selecedDate = moment(date);
    if (selecedDate <= today) {
      this.setState({
        error: true
      });
    } else {
      date = date.format("YYYY-MM-DD");
      localStorage.setItem("date", date);
      this.setState({
        error: false
      });
    }
  };

  navigate = () => {
    this.props.history.push("/bookatable");
  };

  componentDidMount = () => {
    let date = moment().format("YYYY-MM-DD");
    localStorage.setItem("date", date);
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-image">
          {this.state.error && (
            <Error>This date is in the past, try again!</Error>
          )}
          <SearchForm
            handleChange={this.handleDateChange}
            handleClick={this.navigate}
            dateValue={moment()}
            className={"home-search-container"}
            buttonText="Search for vacant tables"
          />
        </div>
        <div className="home">
          <h1>Finne Dinne</h1>

          <p>
            The emergence of Finne Dinne in 1988 revolutionized the Stockholm
            restaurant scene. At the time it was not only a pleasant
            gastronomic, but over two decades it has been a landmark in
            Stureplan. A large chunk of its success is owed to its innovative
            spirit, which has allowed the restaurant to adapt to the times and
            changing trends whenever necessary.
          </p>

          <p>
            The new management at Finne Dinne has gone back to Mediterranean
            cuisine with an Italian emphasis, for which the restaurant has
            always been identified. The gastronomic offering is complemented by
            a wine list of over 50 varieties from the best vineyards in the
            country.n this part of the city, with a certain New York Soho feel,
            music is essential. Every Wednesday, Thursday and Sundays nights
            Finne Dinne offers live jazz from 21h.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
