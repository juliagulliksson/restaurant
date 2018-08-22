import React from "react";
import Date from "./DatePicker";

class AdminSearchForm extends React.Component {
  // Check https://reactjs.org/docs/thinking-in-react.html
  // State, constructors and handlers should be in container page
  // and passed down to subcomponents.
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.name);
    alert(this.state.name);
    // on submit, search for all names and put in state? put in the same fetch herE?
    //console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Search by name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}
export default AdminSearchForm;
