import React, { Component } from 'react';

class TaskDoing extends Component {

    render() {
        return (
            <li className="list-group-item">
                <p className="task">Login fail with email</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;admin@gmail.com</span>
                <button type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }

}

export default TaskDoing;