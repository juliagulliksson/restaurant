import React from 'react';

export default function userForm({}){
  return (
    <form>
    <label for="name">Name:</label>
    <input type="text" name="name" />
    <label for="email">E-mail:</label>
    <input type="email" name="email" />
    <label for="phone">Phone number:</label>
    <input type="text" name="phone" />
    <br/><br/>
    <button type="button">Book your table</button>
    
    </form> 
  );
}