import React from "react";
import Button from "./Button";
import ErrorMessage from './../uiElements/ErrorMessage';
import InputField from './InputField';

export default function SeatingForm(props) {
  return (
    <React.Fragment>
      {props.seatingTimes.seatingTwo >= 15 &&
        props.seatingTimes.seatingOne >= 15 ? (
          <ErrorMessage>Sorry! No seating times available at this date</ErrorMessage>
        ) : (

          <div className="form-group">
            {props.firstSeatingDefault === null && <h2>Available seating times:</h2>}

            {props.seatingTimes.seatingOne < 15 && (
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <InputField
                    defaultChecked={props.firstSeatingDefault}
                    handleChange={props.handleChange}
                    value="firstSeating"
                  />
                  18:00
                </label>
              </div>
            )}

            {props.seatingTimes.seatingTwo < 15 && (
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <InputField
                    defaultChecked={props.secondSeatingDefault}
                    handleChange={props.handleChange}
                    value="secondSeating"
                  />
                  21:00
                </label>
              </div>
            )}
            <br />
            {props.firstSeatingDefault === null &&
              <Button handleClick={props.handleClick}>Proceed booking</Button>
            }

          </div>
        )}
    </React.Fragment>
  );
}
