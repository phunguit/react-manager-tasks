import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { tasksRef }         from '../firebase';
import { v4 as uuid }       from 'uuid';
import { AcAddTask }        from '../actions/index';

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
        this.props.handleAddTask();
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTask: () => {
            dispatch(AcAddTask())
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);