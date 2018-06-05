import React, { Component } from 'react';

import { tasksRefUpdate } from '../firebase';

class TaskFinish extends Component {

    render() {
        var { task } = this.props;
        return (
            <li className="list-group-item">
                <p className="task">{ task.name }</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{ task.email }</span>
            </li>
        );
    }

}

export default TaskFinish;