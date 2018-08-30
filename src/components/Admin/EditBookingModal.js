import React from "react";

class EditBookingModal extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

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
            <div className="modal-body">{this.props.children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.props.handleConfirm}
              >
                Save
              </button>
              <button
                onClick={this.props.handleClose}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBookingModal;
