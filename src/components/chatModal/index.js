import React, { Component } from 'react';

class ChatModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      course: null
    }
  }

  componentDidMount(){
    const { course } = this.props;
    this.setState({ course });
  }

  render(){
    const { course } = this.state;
    return(
      <div>
        <h1>{course}</h1>
      </div>
    );
  }
}

export default ChatModal