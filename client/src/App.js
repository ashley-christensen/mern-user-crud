
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    Axios.get('/getUsers')
      .then((response) => {
        setListOfUsers(response.data);
        console.log(response.data);
      });
  }, []);

  const createUser = () => {
    Axios.post('/createUser', {
      name, age, username
    }).then((response) => {
      console.log('response', response);
      setListOfUsers([...listOfUsers, {
        name, age, username
      }]);
      console.log('list of users', listOfUsers);
    });
  };

  return (

    <div className='container'>
      <div className="userList">
        <h3>List of Users</h3>
        {listOfUsers.map((user) => (
          <div className="userCard">
            <h5>Name: {user.name}</h5>
            <p>Age: {user.age}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}
      </div>
      <div>
        <form id="user" action="" method="post">
          <h3>Add User</h3>
          <h4>Please fill out your information</h4>
          <fieldset>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              placeholder="Your name" type="text" tabindex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                console.log(age);
              }}
              placeholder="Your age" type="number" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
              placeholder="Your username" type="text" tabindex="3" required />
          </fieldset>
          <button
            onClick={createUser}
            name="submit" id="user-submit" type="submit" data-submit="...Sending"
          >Create User</button>
        </form>
      </div>

    </div>

  );
}

export default App;
