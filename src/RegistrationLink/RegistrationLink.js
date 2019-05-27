import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import './RegistrationLink.css'

class RegistrationLink extends Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default RegistrationLink