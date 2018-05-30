import React, { Component } from 'react';

class TaskForm extends Component {

    render() {

        return (
            <div className="panel-footer text-right">
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" name="task" className="form-control" placeholder="Task" />
                    </div>
                    <button type="submit" className="btn btn-info">Add</button>
                </form>
            </div>
        );
    }

}

export default TaskForm;