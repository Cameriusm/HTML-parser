import React from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function NavBar(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="navbars">
      {!currentUser ? (
        <div className="navButtons">
          <Link to="/signup">
            <button className="btn btn-success float-right">Регистрация</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-success float-right ">Войти</button>
          </Link>
        </div>
      ) : (
        <div className="navButtons">
          <Link to="/">
            <button className="btn btn-success float-right">Профиль</button>
          </Link>
        </div>
      )}
    </div>
  );
}
