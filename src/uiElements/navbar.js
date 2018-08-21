import React from 'react';
import '../App.css';

function Nav() {
    return (
        <div className="row">
            <div className="col-sm-8">
                <h1>Hej</h1>
            </div>
            <div className="col-sm-4">
                <div className="input-group">
                    <input className="form-control" placeholder="Username" type="text"></input>
                    <input className="form-control" placeholder="Password" type="password"></input>
                    <div className="input-group-append">
                        <button className="btn">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
