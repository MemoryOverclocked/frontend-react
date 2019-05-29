import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './LoginPanel.css';

class LoginPanel extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Panel id="panel">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <InputField></InputField>
                        </div>
                    </div>
                    <div className="row" id="button">
                        <div className="col-8 offset-2">
                            <Button>Login</Button>
                        </div>
                    </div>
                    <div className="row" id="registration-links">
                        <div className="col-4 offset-2" id="sign-up">
                            <Link to="/Dashboard"><RegistrationLink>Sign Up</RegistrationLink></Link>
                        </div>
                        <div className="col-4 offset-2" id="forgot">
                            <RegistrationLink>Forgot</RegistrationLink>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default LoginPanel;