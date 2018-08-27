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
        <React.Fragment>
          <div className="header-image">
          <SearchForm handleChange= {this.handleDateChange} 
                      handleClick = {this.navigate}
                      dateValue= {moment()}
                      className={"home-search-container"}  />
          </div>

        </React.Fragment>
        <div className="home">
        <h1>Finne Dinner</h1>
        <p>The emergence of Fine Dinner in 1988 revolutionized the Stockholm restaurant scene. 
          At the time it was not only a pleasant gastronomic, but over two decades it has been a landmark in Stureplan.
          A large chunk of its success is owed to its innovative spirit, which has allowed the restaurant to adapt to the 
          times and changing trends whenever necessary.The new management at Fine Dinner has gone back to Mediterranean cuisine with an Italian emphasis, 
          for which the restaurant has always been identified. The gastronomic offering is complemented by a wine list of over 
          50 varieties from the best vineyards in the country.n this part of the city, with a certain New York Soho feel, music is essential. 
          Every Wednesday, Thursday and Sundays nights Fine Dinner offers live jazz from 21h.</p>
       </div> 
      </div>
    );

  }
 
}
