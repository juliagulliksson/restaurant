import React from 'react';
import './SearchForm';

export default function Header(){
  return (
    <React.Fragment>
      <div className="header-image"></div>
      <SearchForm dateChange= {this.handleDateChange}
                  dateValue = {this.state.date} 
                  handleClick = {this.searchForVacantSeatings} />
    </React.Fragment>
  );
}