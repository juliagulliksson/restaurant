import React from 'react';

export default function SuccessMessage({date, seating}){
  let seatingTime;
  seating === "firstSeating"
    ? (seatingTime = "18:00")
    : (seatingTime = "21:00");
  return(
    <div className="alert alert-success" role="alert">
      Congratulations! You have booked a table at {date}{" "}{seatingTime}
    </div>
  );
}