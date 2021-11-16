import React, { useContext } from 'react';
import s from './Page.module.css';
import Button from '../components/Button/Button';
import { AuthContext } from '../contexts/context';

const Auth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h2 className={s.auth}>Authorization</h2>
      <form className={s.form} onSubmit={login}>
        <input className={s.input} type="tel" placeholder="xxx-xxx-xx-xx" />
        <input className={s.input} type="password" placeholder="password" />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default Auth;
