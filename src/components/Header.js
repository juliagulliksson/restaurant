import React from 'react';
import SearchForm from './SearchForm';

export default function Header(){
  return (
    <React.Fragment>
      <div className="header-image">
      <SearchForm /* dateChange= {this.handleDateChange}
                  dateValue = {this.state.date} 
                  handleClick = {this.searchForVacantSeatings} */ />
      </div>
   
    </React.Fragment>
  );
}