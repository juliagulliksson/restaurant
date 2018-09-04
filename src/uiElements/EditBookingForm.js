import React from 'react';

export default function EditBookingForm(props){
  return(
      <div className="form-group">
        <label className="editField" htmlFor="name">
        Name
        </label>
        <input
          className="editField form-control"
          type="text"
          name="name"
          defaultValue={props.defaultName}
          onChange={props.handleChange}
        />
        <label className="editField" htmlFor="phone">
          Phone
        </label>
        <input
          className="editField form-control"
          type="text"
          name="phone"
          defaultValue={props.defaultPhone}
          onChange={props.handleChange}
        />
        <label className="editField" htmlFor="email">
          Email
        </label>
        <input
          className="editField form-control"
          type="text"
          name="email"
          defaultValue={props.defaultEmail}
          onChange={props.handleChange}
        />
      </div>
  )
}