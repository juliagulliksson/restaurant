import React, { Component } from "react";
import Button from './Button';

//Might not need to be a class, 
//depends on if we should use radiobuttons for the seating times or not
export default class SeatingForm extends Component {

  render() {
    return (
      <React.Fragment>
        {this.props.seatingTimes.seatingTwo > 14 &&
        this.props.seatingTimes.seatingTwo > 14 ? (
          <p>Sorry! No seating times available at this date</p>
        ) : (
          <form>
            <div className="form-group">
              <h2>Available seating times:</h2>

              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="firstSeating"
                    name="chosenSeating"
                    onChange={this.props.handleChange}
                  />
                  18:00
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="secondSeating"
                      name="chosenSeating"
                      onChange={this.props.handleChange}
                    />
                    21:00
                  </label>
                </div>
                <br/>
              

              <Button handleClick={this.props.handleClick}>
                Proceed booking
              </Button>
            </div>
          </form>
          
        )}
      </React.Fragment>
    );
  }
}
