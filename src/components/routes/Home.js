import React, {Component} from "react";
import SearchForm from '../../uiElements/SearchForm';
import moment from 'moment';
import Error from '../../uiElements/ErrorMessage';

export default class Home extends Component {

  state = {
    error: false
  }

  handleDateChange = (date) => {
    let today = moment();
    let selecedDate = moment(date);
    if(selecedDate <= today){
      this.setState({
        error: true
      })
    } else {
      date = date.format('YYYY-MM-DD');
      localStorage.setItem( 'date', date); 
      this.setState({
        error: false
      })
    }
  };

  navigate = () => {
    this.props.history.push('/bookatable');
  }

  render(){
    let date = moment().format("YYYY-MM-DD");
    localStorage.setItem('date', date);
    return (

      <div>
        <React.Fragment>
          <div className="header-image">
          {this.state.error && 
          <Error>This date is in the past, try again!</Error>
          }
          <SearchForm handleChange= {this.handleDateChange} 
                      handleClick = {this.navigate}
                      dateValue= {moment()}
                      className={"home-search-container"}  />
          </div>

        </React.Fragment>
        <h1>Home</h1>
        <p>This is the home page.</p>
      </div> 
    );

  }
 
}
