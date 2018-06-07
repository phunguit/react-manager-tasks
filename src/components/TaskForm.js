import React, { Component } from 'react';
import { tasksRef }         from '../firebase';
import { v4 as uuid }       from 'uuid';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isShow: false
        };
    }

    handleOnSubmit = e => {
        e.preventDefault();
        var { name } = this.state;
        tasksRef.push({
            id: uuid(),
            name,
            email: 'phungthaouit@gmail.com',
            status: 0
        });
        this.setState({
            name: ''
        });
    }

    handleChange = e => {        
        var { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        var { name } = this.state;
        
        return (
            <div className="panel-footer text-right">            
                <form className="form-inline" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <input type="text" value={ name } onChange={this.handleChange} name="name" className="form-control" placeholder="Task" />
                    </div>
                    <button type="submit" className="btn btn-info">Add</button>
                </form>
            </div>
        );
    }

}

export default TaskForm;