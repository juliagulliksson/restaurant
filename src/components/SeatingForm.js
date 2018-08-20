import React, {Component} from 'react';

export default class SeatingForm extends Component {

  state = {
    firstSeating: false,
    secondSeating: false
  }

  handleClick = () => {
    this.setState((prevState) => ({
      firstSeating: true
    }));
  }

  render(){
    return (
      <React.Fragment>
        { this.props.seatingTimes.seatingTwo > 14 && 
        this.props.seatingTimes.seatingTwo > 14 ? 
        <p>Sorry! No seating times available at this date</p>
        : (
      
        <form>
          <h2>Available seating times:</h2>
 
             <label>
              <input type="radio" value="firstSeating" name="chosenSeating"
               onChange={this.props.handleChange} />
              18:00
            </label> 

            <label>
              <input type="radio" value="secondSeating" name="chosenSeating"
               onChange={this.props.handleChange} />
              21:00
            </label>
          
          <button type="button" onClick={this.props.handleClick}>Proceed booking</button>
        
        </form>
        )}
      </React.Fragment>
    );
  }
 
}