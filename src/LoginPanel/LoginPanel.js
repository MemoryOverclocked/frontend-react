import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './LoginPanel.css';

class LoginPanel extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-10 mx-auto">
                    <Panel>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-7 mx-auto">
                                    <InputField></InputField>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid" id="button">
                            <div className="row">
                                <div className="col-7 mx-auto">
                                    <Button>Login</Button>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid" id="registration-links">
                            <div className="row">
                                <div className="col-6 mx-auto">
                                    <RegistrationLink>Sign Up</RegistrationLink>
                                </div>
                                <div className="col-6 mx-auto">
                                    <RegistrationLink>Forgot</RegistrationLink>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default LoginPanel;