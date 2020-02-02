import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Chatroom from './pages/chatroom';
import Login from './pages/login';
import Signup from './pages/signup';
import Onboarding from './pages/onboarding';

const SERVER_URL = 'http://localhost:3001';
const socket = io.connect(SERVER_URL);

class App extends Component{
  render(){
    return (
    <Router>
      <Switch>
        <Route exact path = '/' render = {(routeProps) => <Welcome  {...routeProps} socket = { socket } />} />
        <Route exact path = '/home' render = {(routeProps) => <Home  {...routeProps} socket = { socket } />} />
        <Route exact path = '/chatroom' render = {(routeProps) => <Chatroom  {...routeProps} socket = { socket } />} />
        <Route exact path = '/login' render = {(routeProps) => <Login  {...routeProps} socket = { socket } />} />
        <Route exact path = '/signup' render = {(routeProps) => <Signup  {...routeProps} socket = { socket } />} />
        <Route exact path = '/onboarding' render = {(routeProps) => <Onboarding  {...routeProps} socket = { socket } />} />
      </Switch>
    </Router>
    );
  }
}

export default App;
