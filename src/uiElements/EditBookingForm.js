import React from 'react';

export default function EditBookingForm(props){
  return(
    <React.Fragment>
      <label className="editField" htmlFor="name">
      Name
      </label>
      <input
        className="editField"
        type="text"
        name="name"
        defaultValue={props.defaultName}
        onChange={props.handleChange}
      />
      <br />
      <label className="editField" htmlFor="phone">
        Phone
      </label>
      <input
        className="editField"
        type="text"
        name="phone"
        defaultValue={props.defaultPhone}
        onChange={props.handleChange}
      />
      <br />
      <label className="editField" htmlFor="email">
        Email
      </label>
      <input
        className="editField"
        type="text"
        name="email"
        defaultValue={props.defaultEmail}
        onChange={props.handleChange}
      />
  </React.Fragment>
  )
}