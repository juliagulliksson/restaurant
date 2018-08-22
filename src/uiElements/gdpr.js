import React, { Component } from "react";

export default class Gdpr extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="gdprPopup">
                    <h1>
                        Attention
                </h1>
                    <p>By confirming your booking you agree with us handeling your personal information such as name, phonenumber and email when booking a table.</p>
                    <button onClick={this.props.handleClick} type="submit">I agree</button>
                </div >
            </React.Fragment>
        );
    }
}