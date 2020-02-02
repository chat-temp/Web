import React, { Component } from 'react';
import './style.scss';
import '../../styles/_common.scss';
import ChatModal from '../../components/chatModal';

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      courses: []
    }
  }

  handleClick = (course) => {
    const { history } = this.props;
    sessionStorage.setItem('course', course);

    history.push('/chatroom');
  }

  async componentDidMount(){
    const user = await JSON.parse(sessionStorage.getItem('user'));
    const { rooms } = user;
    const courses = [];
    rooms.forEach(room => {
      courses.push(<div onClick={() => this.handleClick(room)}>
          <ChatModal course={ room } />
        </div>);
    });
    this.setState({ courses })
  }

  render(){
    const { courses } = this.state;
    return(
      <div className='container-column'>
        { courses }
      </div>
    );
  }
}

export default Home;