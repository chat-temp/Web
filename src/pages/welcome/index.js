import React, { Component } from 'react';
import './style.scss';
import '../../styles/_common.scss';

class Welcome extends Component{
  constructor(props){
    super(props);
  }

  handleClick = (type) => {
    const { history } = this.props;
    history.push(`/${type}`);
  }

  render(){
    return(
      <div class='container-column'>
        <button onClick={ () => this.handleClick('login') }>Login</button>
        <button onClick={ () => this.handleClick('signup') } >Sign up</button>
      </div>
    );
  }
}

export default Welcome;