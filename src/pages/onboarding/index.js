import React, { Component } from 'react';
import './style.scss';

class Onboarding extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      country: null,
      language: null
    }
  }

  hangleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { country, language } = this.state;
    const { history } = this.props;
    
  }

  render(){
    return(
      <div>
        <input placeholder='country' name = 'country' type='text' onChange={this.hangleChange}/>
        <input placeholder='language' name = 'language' type='text' onChange={this.hangleChange}/>
        <button onClick={this.handleClick} >Finish</button>
      </div>
    );
  }
}

export default Onboarding;
