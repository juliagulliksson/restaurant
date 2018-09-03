import React from "react";
import Button from "./Button";
import ErrorMessage from './../uiElements/ErrorMessage';

export default function SeatingForm(props) {
  console.log(props.seatingTimes);
  return (
    <React.Fragment>
      {props.seatingTimes.seatingTwo >= 15 &&
      props.seatingTimes.seatingOne >= 15 ? (
        <ErrorMessage>Sorry! No seating times available at this date</ErrorMessage>
      ) : (
          <form>

          <div className="form-group">
          {!props.admin &&   <h2>Available seating times:</h2>}
          
            {props.seatingTimes.seatingOne < 15 && (
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="firstSeating"
                    name="chosenSeating"
                    onChange={props.handleChange}
                  />
                  18:00
                </label>
              </div>
            )}

            {props.seatingTimes.seatingTwo < 15 && (
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="secondSeating"
                    name="chosenSeating"
                    onChange={props.handleChange}
                  />
                  21:00
                </label>
              </div>
            )}
            <br />
            {!props.admin &&
            <Button handleClick={props.handleClick}>Proceed booking</Button>
            }
            
          </div>
      
       </form>
      )}
    </React.Fragment>
  );
}
