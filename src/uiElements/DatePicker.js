import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class Date extends React.Component {
  
  state = {
    startDate: this.props.value,
    error: false
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
   
    if(date !== null){
      this.props.handleChange(date);
    }
  }

  render() {
    return (
      
      <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="date"
          className="form-control"
      />
     
    );
  }
}