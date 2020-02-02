import React, { Component } from 'react';
import './style.scss';
import '../../styles/_common.scss';
import  API from  '../../services/api';

class Login extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      email: null,
      password: null
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { history } = this.props;
    API.login(history, this.state);
  }

  render(){
    return(
      <div class='container-column'>
        <input name = 'email' onChange={ this.handleChange } type='text' placeholder='email' />
        <input name='password' onChange={ this.handleChange } type='text' placeholder='password' />
        <button onClick={this.handleClick} >Login</button>
      </div>
    );
  }
}

export default Login;