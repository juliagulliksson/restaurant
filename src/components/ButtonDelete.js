import React from "react";

export default function Button(props) {
  return (
    <button
      className="btn btn-danger"
      type="button"
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}
