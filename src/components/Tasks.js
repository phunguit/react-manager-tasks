import React, { Component } from 'react';

import TaskDoing from './TaskDoing';
import TaskForm from './TaskForm';
import { tasksRef } from '../firebase';

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        tasksRef.on('value', items => {
            var records = [];
            items.forEach((item) => {
                records.push(item.val());
            });

            this.setState({
                items: records
            });
        });
    }

    render() {

        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                            <h3 className="panel-title">Task Doing</h3>
                            </div>
                            <div className="panel-body">{ this.getTasks(this.state.items) }</div>
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

    getTasks(tasks) {
        var xhtml = null;

        if(tasks.length > 0) {
            xhtml = tasks.map((task, index) => {
                return <TaskDoing key={ index } task={ task } />
            });
        }

        return <ul className="list-group">{ xhtml }</ul>;
    }

}

export default Tasks;