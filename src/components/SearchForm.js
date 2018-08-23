import React from "react";
import Button from './Button';
import Date from './DatePicker';

export default function searchForm({ handleClick, dateValue, dateChange }) {
  let numberOfPeople = [
    "1 person",
    "2 people",
    "3 people",
    "4 people",
    "5 people",
    "6 people"
  ];

  return (
    <div className="search-container">
      <form className="form-inline">
        <div className="form-group">
          <select name="numberOfPeople" className="form-control">
            {numberOfPeople.map(people => (
              <option key={people}>{people}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date" className="sr-only">Choose a date:</label>

          <Date handleChange={dateChange}/>
          <Button handleClick={handleClick}> Search for vacant tables </Button>
        </div>
      </form>
    </div>
    
  );
}