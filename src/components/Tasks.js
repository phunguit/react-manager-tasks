import React, { Component } from 'react';

import TaskDoing from './TaskDoing';
import TaskForm from './TaskForm';

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
                                    <TaskDoing />
                                    <TaskDoing />
                                    <TaskDoing />
                                </ul>
                            </div>
                            <TaskForm />
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