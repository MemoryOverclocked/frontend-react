import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import LoginPanel from './LoginPanel/LoginPanel'

class App extends Component {
  render() {
    return (

      <LoginPanel></LoginPanel>

    );
  }
}

export default App;