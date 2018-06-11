import React, { Component } from 'react';

import TaskDoing    from './TaskDoing';
import TaskForm     from './TaskForm';
import TaskFinish   from './TaskFinish';
import { tasksRef, tasksRefUpdate } from '../firebase';

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasksDoing: [],
            tasksFishnish: []
        }
    }

    componentWillMount() {
        tasksRef.on('value', items => {
            var recordsDoing    = [];
            var recordsFinish   = [];
            items.forEach((item) => {
                var data = {
                    key: '',
                    name: '',
                    email: '',
                    status: 0
                };

                data.key    = item.key;
                data.name   = item.val().name;
                data.status = item.val().status;
                data.email  = item.val().email;

                if(item.val().status) {
                    recordsFinish.push(data);
                } else {
                    recordsDoing.push(data);
                }
            });

            this.setState({
                tasksDoing: recordsDoing,
                tasksFishnish: recordsFinish
            });
        });
    }

    handleClearAll = () => {
        var updates = {};

        this.state.tasksFishnish.forEach(element => {
            updates[element.key] = null;
        });

        tasksRef.update(updates);
    }

    render() {
        var xhtmlBtnClearAll = null;
        if(this.state.tasksFishnish.length > 0) {
            xhtmlBtnClearAll = <button onClick={() => this.handleClearAll()} className='btn btn-danger'>Clear All</button>
        }
        return (
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                            <h3 className="panel-title">Task Doing</h3>
                            </div>
                            <div className="panel-body">{ this.getTasksDoing(this.state.tasksDoing) }</div>
                            <TaskForm />
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                            <h3 className="panel-title">Task Finish</h3>
                            </div>
                            <div className="panel-body">{ this.getTasksFinish(this.state.tasksFishnish) }</div>
                            { xhtmlBtnClearAll }
                        </div>
                        
                    </div>                    
                </div>
            </div>
        );
    }

    getTasksDoing(tasks) {
        var xhtml = null;
        if(tasks.length > 0) {
            xhtml = tasks.map((task, index) => {
                return <TaskDoing key={ index } task={ task } />
            });
        }
        return <ul className="list-group">{ xhtml }</ul>;
    }

    getTasksFinish(tasks) {
        var xhtml = null;
        if(tasks.length > 0) {
            xhtml = tasks.map((task, index) => {
                return <TaskFinish key={ index } task={ task } />
            });
        }
        return <ul className="list-group">{ xhtml }</ul>;
    }

}

export default Tasks;