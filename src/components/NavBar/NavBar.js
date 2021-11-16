import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/context';
import Button from '../Button/Button';

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <Button onClick={logout}>Log out</Button>
      <div className="navbar__link">
        <Link to="/auth">Authorization</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default NavBar;
