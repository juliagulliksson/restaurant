import React from "react";
import DeleteBookingModal from "./DeleteBookingModal";
import EditBookingModal from "./EditBookingModal";
import EditBookingForm from "./EditBookingForm";

class BookingRowMobile extends React.Component {
    state = {
        showDelete: false,
        showEdit: false
    };

    onDateChange = date => {
        console.log(date);
    };

    showDeleteModal = () => {
        this.setState({ showDelete: true });
    };

    hideDeleteModal = () => {
        this.setState({ showDelete: false });
    };

    showEditModal = () => {
        this.setState({ showEdit: true });
    };

    hideEditModal = () => {
        this.setState({ showEdit: false });
    };

    handleDelete = () => {
        this.setState({ showDelete: false });
        let seatingTime;
        this.props.booking.seatingOne === 1
            ? (seatingTime = "18:00")
            : (seatingTime = "21:00");

        let bookingInfo = {
            phone: this.props.booking.phone,
            bookingId: this.props.booking.bookingId,
            email: this.props.booking.email,
            date: this.props.booking.date,
            name: this.props.booking.name,
            seatingTime: seatingTime
        };
        this.props.deleteBooking(bookingInfo);
    };

    handleEdit = () => {
        console.log("EditFunction");
    };

    handleFormChange = () => { };

    render() {
        const booking = this.props.booking;

        return (
            <div className="mobile col-md-12">
                <p>ID: {booking.bookingId}</p>
                <hr />
                <p>Date: {booking.date}</p>
                <p>Time: {booking.seatingOne === "1" ? "18:00" : "21:00"}</p>
                <p>Name: {booking.name}</p>
                <p>Phone: {booking.userPhone}</p>
                <p>Email: {booking.email}</p>
                <p>
                    <EditBookingModal
                        show={this.state.showEdit}
                        handleClose={this.hideEditModal}
                        handleConfirm={this.handleEdit}
                        booking={booking}
                        handleChange={this.props.handleChange}
                        handleDateChange={this.props.handleDateChange}
                    >
                        {/*Props Children for EditBookingModal, pulling in edit form*/}
                        <p>Booking ID: {booking.bookingId}</p>
                        <EditBookingForm
                            booking={booking}
                            onDateChange={this.onDateChange}
                        />
                    </EditBookingModal>
                    <button onClick={this.showEditModal} className="button-edit">
                        Edit
          </button>
                </p>
                <p>
                    <DeleteBookingModal
                        show={this.state.showDelete}
                        handleClose={this.hideDeleteModal}
                        handleConfirm={this.handleDelete}
                    >
                        <p>Booking ID: {booking.bookingId}</p>
                        <p>Date: {booking.date}</p>
                        <p>
                            Seating time: {booking.seatingOne === "1" ? "18:00" : "21:00"}
                        </p>
                        <p>Name: {booking.name}</p>
                        <p>Phone: {booking.userPhone}</p>
                        <p>Email: {booking.email}</p>
                    </DeleteBookingModal>
                    <button onClick={this.showDeleteModal} className="button-delete">
                        Delete
          </button>
                </p>
            </div>
        );
    }
}

export default BookingRowMobile;
