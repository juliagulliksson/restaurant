import React from 'react';

export default function userForm({handleChange, handleClick}){
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" onChange={handleChange} />
      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="phone">Phone number:</label>
      <input type="text" name="phone" onChange={handleChange} />
      <br/><br/>
      <button type="button" onClick={handleClick}>Book your table</button>
    </form> 
  );
}