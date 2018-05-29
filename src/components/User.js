import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">User</h3>
                    </div>
                    <div className="panel-body">
                        <div>
                            <h4>Email: lthlan54@gmail.com</h4>
                            <h4>UserID: W740UjZcnlSMgiwfBuYV4aMU9i43</h4>
                            <h4>Website: hailan.com</h4>
                            <button type="submit" className="btn btn-success">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default User;