import React from 'react';

export default function seatingForm({handleClick, seatingOne, seatingTwo}){


  //Determine which seatings are available
  if(seatingOne < 15 && seatingTwo < 15){
    message = "Both";
   
  } else if(seatingOne < 15) {
  
    message = "18:00";
  } else if(seatingTwo < 15){
   message = "21:00";
  } else {
    message = "None";
  }

  return (
  <form>
    <label htmlFor="date">Choose a date:</label>
    <input type="date" name="date" value={dateValue} onChange={dateChange}/>
    <button type="button" onClick={handleClick} >Search</button>
  </form>
  );
}