import React, { Component } from 'react';

import { tasksRefUpdate } from '../firebase';

class TaskDoing extends Component {

    handleCompleted = (e) => {
        e.preventDefault();
        var { task } = this.props;
        tasksRefUpdate.child('/tasks/' + task.key).update({status: 1});
    }

    render() {
        var { task } = this.props;
        return (
            <li className="list-group-item">
                <p className="task">{ task.name }</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{ task.email }</span>
                <button onClick={this.handleCompleted} type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }

}

export default TaskDoing;