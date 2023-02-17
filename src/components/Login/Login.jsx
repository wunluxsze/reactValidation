import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = ({ setUserAuth }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    if (name.length > 0 && password.length > 0) {
      if (name === 'admin' && password === 'admin') {
        setUserAuth(true);
        navigate('/');
      } else {
        setUserError(true);
      }
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
    <div className="login">
      <form action="" className="login__form" onSubmit={onSubmit}>
        <p>
          Работает только с admin admin, т.к. я думаю нет особого смысла мне мучаться, когда
          итоговая аунтефикация будет по токену
        </p>
        <input
          type="text"
          placeholder="Name"
          className={`input ${nameError ? 'error' : ''}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
        <input
          type="password"
          placeholder="Password"
          className={`input ${passwordError ? 'error' : ''}`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>Поле не может быть пустым</p>}
        {userError && <p style={{ color: 'red' }}>Имя или пароль введены не верно</p>}
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
