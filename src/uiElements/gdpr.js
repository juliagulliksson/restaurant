import React from 'react';



class Gdpr extends React.Component {

    state = {
        gdpr: false
    }

    gdprAgree = () => {
        this.setState({
            gdpr: true
        })
        this.gdprCheck()
    }

    gdprDisagree = () => {
        this.setState({
            gdpr: false
        })
        this.gdprCheck()
    }

    gdprCheck = () => {
        if (this.state.gdpr === false || this.state.gdpr === true) {
            console.log(this.state.gdpr)
        }
    }

    render() {
        return (
            <div className="gdprPopup">
                <h1>
                    Attention
                </h1>
                <p>
                    By confirming your booking you agree with us handeling your personal information such as name, phonenumber and email when booking a table.
                </p>
                <button onClick={this.gdprAgree} type="submit">I AGREE</button>
                <button onClick={this.gdprDisagree} type="submit" > I DISAGREE</button>
            </div >
        );
    }
}

export default Gdpr;