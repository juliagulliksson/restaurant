import React, {Component} from "react";
//import Header from '../Header';
import SearchForm from '../SearchForm';
import moment from 'moment';
import { browserHistory } from 'react-router';


export default class Home extends Component {

  state = {
    date: moment().format("YYYY-MM-DD")
  }

  handleDateChange = date => {
    const selectedDate = date.format("YYYY-MM-DD");
    this.setState({ date: selectedDate });
  };

  searchForVacantSeatings = () => {

  }

  navigateToPage = () => {
    this.props.history.push({pathname: '/bookatable', query: {date: this.state.date}});
  };

  render(){
    return (

      <div>
        {/* <Header onClick={}/> */}
  
        <React.Fragment>
          <div className="header-image">
          <SearchForm  dateChange= {this.handleDateChange} 
                      handleClick = {this.navigateToPage}  />
          </div>
      
        </React.Fragment>
        <h1>Home</h1>
        <p>This is the home page.</p>
      </div> 
    );

  }
 
}
