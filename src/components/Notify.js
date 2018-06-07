import React, { Component }         from 'react';
import { AlertContainer, Alert }    from 'react-bs-notifier';

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

        var { isShow } = this.state; 

        if(!isShow) {
            return null;
        }

        return (
            <Alert type='info' onDismiss={this.handleDismiss} position='top-right'>
                This is Alert
            </Alert>
        );
    }

}

export default Notify;