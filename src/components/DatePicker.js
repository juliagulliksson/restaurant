import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class Date extends React.Component {
  
  state = {
    startDate: moment()
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
    this.props.handleChange(date);
  }

  render() {
    return (<DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        name="date"
        className="form-control"

    />);
  }
}