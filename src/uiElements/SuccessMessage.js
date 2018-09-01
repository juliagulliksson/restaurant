import React from 'react';
import moment from 'moment';

export default function SuccessMessage({date, seating}){
  let seatingTime;
  seating === "firstSeating"
    ? (seatingTime = "18:00")
    : (seatingTime = "21:00");
  return(
    <div className="alert alert-success" role="alert">
      Congratulations! You have booked a table at {moment(date).format('MMMM Do YYYY')}{", "}{seatingTime}
    </div>
  );
}