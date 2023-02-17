import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function Header({ userAuth, setUserAuth }) {
  const navigate = useNavigate();
  const logout = () => {
    setUserAuth(false);
    return navigate('/');
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__menu">
          {userAuth ? (
            <>
              <Link to="/cart">Cart</Link>
              <Link to="/orders">Orders</Link>
              <button onClick={logout}>LogOut</button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
