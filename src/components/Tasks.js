import React, { Component } from 'react';

class Tasks extends Component {

    render() {
        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                            <h3 className="panel-title">Task Doing</h3>
                            </div>
                            <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="task">Login fail with email</p>
                                    <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                                    <button type="button" className="btn btn-warning btn-xs">Completed</button>
                                </li>
                                <li className="list-group-item">
                                    <p className="task">Error register</p>
                                    <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                                    <button type="button" className="btn btn-warning btn-xs">Completed</button>
                                </li>
                            </ul>
                            </div>
                            <div className="panel-footer text-right">
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="text" name="task" className="form-control" placeholder="Task" />
                                </div>
                                <button type="submit" className="btn btn-info">Add</button>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                            <h3 className="panel-title">Task Finish</h3>
                            </div>
                            <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="task">CSS is too bad</p>
                                    <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                                </li>
                                <li className="list-group-item">
                                    <p className="task">CSS error</p>
                                    <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;lthlan54@gmail.com</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Tasks;