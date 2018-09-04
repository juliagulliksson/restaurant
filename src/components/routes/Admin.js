import React from "react";
import AdminPage from "./../Admin/AdminPage";

export default function Admin(props) {
  return (
    <div>
      <div className="admin">
        <h1>Booking Manager</h1>
        <AdminPage history={props.history} />
      </div>
    </div>
  );
}
