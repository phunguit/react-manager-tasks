import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Sign Up</h3>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-6">
                                <input type="text" name="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-6">
                                <input type="text" name="password" className="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Website</label>
                            <div className="col-sm-6">
                                <input type="text" name="website" className="form-control" id="inputEmail3" placeholder="Website" />
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-6">
                                <button type="submit" className="btn btn-success">Sign up</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Signup;