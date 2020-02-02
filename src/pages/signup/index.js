import React, { Component } from 'react';
import './style.scss';
import '../../styles/_common.scss';
import API from '../../services/api';

class Signup extends Component{
  constructor(props){
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      preferredLanguage: null,
      country: null
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { history } = this.props;
    
    API.signup(history, this.state)
  }

  render(){
    return(
      <div class='container-column'>
        <input placeholder='first name' name='firstName' type='text' onChange={this.handleChange}/>
        <input placeholder='last name' name='lastName' type='text' onChange={this.handleChange}/>
        <input placeholder='email' name='email' type='text' onChange={this.handleChange}/>
        <input placeholder='password' name='password' type='text' onChange={this.handleChange}/>
        <input placeholder='country' name='country' type='text' onChange={this.handleChange}/>
        <input placeholder='preffered language' name='preferredLanguage' type='text' onChange={this.handleChange}/>
        <button onClick={this.handleClick} >Sign Up</button>
      </div>
    );
  }
}

export default Signup;

//firstname
//lastname
//email