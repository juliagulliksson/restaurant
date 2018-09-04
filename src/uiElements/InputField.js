import React from 'react';

export default function InputField(props){

  if(props.defaultChecked !== null){
    return(
      <input
        className="form-check-input"
        type="radio"
        value={props.value}
        name="chosenSeating"
        onChange={props.handleChange}
        defaultChecked={props.defaultChecked}
      />
    )
  } else {
    return (
      <input
      className="form-check-input"
      type="radio"
      value={props.value}
      name="chosenSeating"
      onChange={props.handleChange}
      defaultChecked={props.defaultChecked}
    />
    )
  }

}