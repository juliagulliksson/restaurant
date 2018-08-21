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
    <div className="form-container">
    <form>
      <div className="form-group">
        <select name="numberOfPeople" className="form-control">
          {numberOfPeople.map(people => (
            <option key={people}>{people}</option>
          ))}
        </select>
        <label htmlFor="date">Choose a date:</label>

          <Date handleChange={dateChange}/>
      {/*   <input type="date" name="date" value={dateValue} 
        onChange={dateChange} className="form-control" /> */}
        <Button handleClick={handleClick}> Search for vacant tables </Button>
      </div>
    </form>
    </div>
  );
}
