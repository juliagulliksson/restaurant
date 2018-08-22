import React from 'react';
import Button from './Button';

export default function userForm({handleChange, handleClick, handleCancel}){
  return (
    <div className="form-container">
      <form className="form-group">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} className="form-control"/>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" onChange={handleChange} className="form-control" />
          <label htmlFor="phone">Phone number:</label>
          <input type="text" name="phone" onChange={handleChange} className="form-control" />
          <Button handleClick={handleClick}>Book your table</Button>
          <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
          
        </div>
      </form>
    </div>
  );
}