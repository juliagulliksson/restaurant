import React from "react";

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
    <form>
      <select name="numberOfPeople">
        {numberOfPeople.map(people => (
          <option key={people}>{people}</option>
        ))}
      </select>
      <label htmlFor="date">Choose a date:</label>

      <input type="date" name="date" value={dateValue} onChange={dateChange} />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </form>
  );
}
