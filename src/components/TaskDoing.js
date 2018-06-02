import React, { Component } from 'react';

class TaskDoing extends Component {

    render() {
        var { task } = this.props;
        return (
            <li className="list-group-item">
                <p className="task">{ task.name }</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{ task.email }</span>
                <button type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }

}

export default TaskDoing;