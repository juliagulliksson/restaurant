import React from "react";
import Button from "./Button";

export default function SeatingForm(props) {
  return (
    <React.Fragment>
      {props.seatingTimes.seatingTwo > 14 &&
      props.seatingTimes.seatingOne > 14 ? (
        <p>Sorry! No seating times available at this date</p>
      ) : (
        <form>
          <div className="form-group">
            <h2>Available seating times:</h2>
            {props.seatingTimes.seatingOne < 14 && (
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

            {props.seatingTimes.seatingTwo < 14 && (
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

            <Button handleClick={props.handleClick}>Proceed booking</Button>
          </div>
        </form>
      )}
    </React.Fragment>
  );
}
