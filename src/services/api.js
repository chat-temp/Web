import axios from 'axios';
const SERVER_URL = 'http://localhost:3002'
const api = axios.create({ baseURL: SERVER_URL });

const getRoomMessages = async (room) => {
  try{
    const res = await api.get(`/messages/getRoomMessagesForUser?roomInfo=${room}`);
    console.log(res);
    return res.data
  } catch(e) {
    console.log(e)
  }
}

const getUserRooms = () => {
  //make api call to get user rooms
}

const login = async (history, data) => {
  try{
    const token = await api.post('/users/login', data);
    await sessionStorage.setItem('token', token);
    const user = await getUser(data.email);
    console.log(user);
    await sessionStorage.setItem('user', JSON.stringify(user));
    history.push('/home');
  } catch (e){
    console.log(e)
    alert('incorrect credentials')
  }
}

const signup = async (history, data) => {
  try{
    await api.post('/users/createUser', data);
    history.push('/home');
  } catch (err){
    console.log(err);
  }
}

const getUser = async (email) => {
  console.log(email)
  try{
    const res = await api.get(`/users?email=${email}`);
    console.log(res);
    return res.data;
  } catch(e) {
    console.log(e);
  }
}

const createMessage = async (data) => {
  try{
    await api.post('/messages/createMessage', data);
  } catch(e) {
    console.log(e);
  }
}

export default { getRoomMessages, getUserRooms, login, signup, getUser, createMessage };