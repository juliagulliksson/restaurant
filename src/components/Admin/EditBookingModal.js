import React from "react";
import EditBooking from "./EditBooking";

class EditBookingModal extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.show ? "modal display-block" : "modal display-none"
        }
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit this booking</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Booking ID: {this.props.booking.bookingId}</p>
              <EditBooking
                booking={this.props.booking}
                handleClose={this.props.handleClose}
                handleChange={this.props.handleChange}
                handleDateChange={this.props.handleDateChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBookingModal;
