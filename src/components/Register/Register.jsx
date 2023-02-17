import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Register({ setUserAuth, users, setUsers }) {
  const navigate = useNavigate();
  const addUser = () => {
    setUsers([
      ...users,
      {
        id: userId,
        name: name,
        password: password,
      },
    ]);
    navigate('/');
  };

  const [userId, setUserId] = useState(1);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    if (name.length > 0 ** password.length > 0) {
      setUserAuth(true);
      setUserId(userId + 1);
      addUser();
      console.log(users);
    } else {
      if (name.length === 0) {
        setNameError(true);
      }
      if (password.length === 0) {
        setPasswordError(true);
      }
    }
  };

  return (
    <div>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="name..."
          className={`input${nameError ? '__error' : ''}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
        <input
          type="password"
          placeholder="password..."
          className={`input ${passwordError ? '__error' : ''}`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
