import React, { Component }         from 'react';
import { AlertContainer, Alert }    from 'react-bs-notifier';
import { connect }                  from 'react-redux';

import * as Types                   from '../contants/Action-Types';
import { stat } from 'fs';

const alerts = [{
	id: Types.CHANGE_NOTIFY_ADD,
	type: "info",
	message: "Added!"
}, {
	id: Types.CHANGE_COMPLETED,
	type: "info",
	message: "Completed!"
}]


class Notify extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isShow: true
        };
    }

    handleDismiss = e => {
        this.setState({
            isShow: false
        });
    }

    render() {

        //var { isShow } = this.state;
        var { notify } = this.props;

        var isShow = (notify != null && notify.type != null) ? notify.isShow : false;

        if(!isShow) {
            return null;
        }

        var dataFiltered = alerts.filter( (alert, index) => {            
            if(alert.id === notify.type) {
                return alert;
            }
        });
        
        return (
            <Alert type='info' onDismiss={this.handleDismiss} position='top-right'>{ dataFiltered[0].message }</Alert>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        notify: state.notify
    }
}

export default connect(mapStateToProps)(Notify);