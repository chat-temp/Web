import React, { Component } from 'react';
import './style.scss';
import '../../styles/_common.scss';
import API from '../../services/api';

import MessageModal from '../../components/messageModal';

class Chatroom extends Component{
  constructor(props){
    super(props);

    const { socket } = this.props;

    this.state = {
      messages: [],
      text: null,
      course: null
    }

    socket.on('server-message', ({ name, text }) => {
      console.log(text)
      const { messages } = this.state;
      messages.push(<MessageModal name={ name } message={ text }/>);
      this.setState({ messages });
    });
  }

  componentDidMount(){
    const { socket } = this.props;
    const course = sessionStorage.getItem('course');
    const language = sessionStorage.getItem('language') || 'english';
    socket.emit('client-join_Chat', { course, language });
    this.setState({ course });
    //load messages from db 
  }

  handleClick = async () => {
    const { socket } = this.props;
    const { text, course } = this.state;
    const user = await sessionStorage.getItem('user');
    const data = { userInfo: user, content: text, roomInfo: course, timeStamp: new Date() }
    API.createMessage(data);
    socket.emit('client-message', ({ course, data }))
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name] : value });
  }

  render(){
    const { messages, course } = this.state;
    return(
      <div className='container-column'>
        <h1>{ course }</h1>
        <div>
          { messages }
        </div>
        <div>
          <input name='text' type='text' onChange={ this.handleChange }/>
          <button onClick = { this.handleClick }>Send</button>
        </div>
      </div>
    );
  } 
}

export default Chatroom;