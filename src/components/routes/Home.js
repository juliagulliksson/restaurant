import React, {Component} from "react";
//import Header from '../Header';
import SearchForm from '../SearchForm';
import moment from 'moment';

export default class Home extends Component {

  handleDateChange = date => {
    const selectedDate = date.format("YYYY-MM-DD");
    localStorage.setItem( 'date', selectedDate);
  };

  navigate = () => {
    this.props.history.push('/bookatable');
  }

  render(){
    let date = moment().format("YYYY-MM-DD");
    localStorage.setItem('date', date);
    return (
     

      <div>
        {/* <Header onClick={}/> */}
  
        <React.Fragment>
          <div className="header-image">
          <SearchForm  dateChange= {this.handleDateChange} 
                      handleClick = {this.navigate}  />
          </div>

        </React.Fragment>
        <h1>Home</h1>
        <p>This is the home page.</p>
      </div> 
    );

  }
 
}
