import React, { Component } from 'react';

import { tasksRef }         from '../firebase';

class TaskFinish extends Component {

    handleOnClick = key => {
        tasksRef.child(key).remove();
    }

    render() {
        var { task } = this.props;
        return (
            <li className="list-group-item">
                <p className="task">{ task.name }</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{ task.email }</span>
                <button onClick={() => this.handleOnClick(task.key)} type='button' className='btn btn-danger btn-xs'>Delete</button>
            </li>
        );
    }

}

export default TaskFinish;