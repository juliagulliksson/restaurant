import React from 'react';

export default function searchForm({handleClick, dateValue, dateChange}){
  return (
  <form>
    <label htmlFor="date">Choose a date:</label>
    <input type="date" name="date" value={dateValue} onChange={dateChange}/>
    <button type="button" onClick={handleClick} >Search</button>
  </form>
  );
}