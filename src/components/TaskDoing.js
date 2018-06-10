import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { tasksRefUpdate }   from '../firebase';
import { AcCompletedTask }  from '../actions/index';

class TaskDoing extends Component {

    handleCompleted = (e) => {
        e.preventDefault();
        var { task } = this.props;
        tasksRefUpdate.child('/tasks/' + task.key).update({status: 1});
        this.props.handleCompletedTask();
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleCompletedTask: () => {
            dispatch(AcCompletedTask())
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskDoing);