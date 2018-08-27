import React from "react";

export default function Gdpr({ handleClick, handleCancel }) {
    return (
        <React.Fragment>
            <div className="gdprPopup">
                <h1>
                    Attention
                </h1>
                <p>By agreeing to this you confirm that we can handle your personal information for the purpose of managing your booking</p>
                <button onClick={handleClick} className="btn btn-success" type="submit">I agree</button>
                <button onClick={handleCancel} className="btn btn-danger" type="submit">I disagree</button>
            </div >
        </React.Fragment>
    );
}