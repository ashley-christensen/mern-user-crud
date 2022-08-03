
import './App.css';
import { useState } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([{ name: 'Ashley', age: 35, username: "ashleyc" }]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [username, setUsername] = useState('');

  console.log(name);
  return (
    <div>
      <div className='displayContainer'>
        <div className="usersDisplay">
          <h3>List of Users</h3>
          {listOfUsers.map((user) => (
            <div>{user.name}</div>
          ))}
        </div>
      </div>
      <div className="container">
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
              placeholder="Your age" type="age" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
              placeholder="Your username" type="username" tabindex="3" required />
          </fieldset>
          <button name="submit" type="submit" id="user-submit" data-submit="...Sending">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
