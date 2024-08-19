// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name); // Отримання імені користувача з Redux

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Hello, {userName}</p> {/* Відображення імені користувача */}
      <button className={css.logoutButton} onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserMenu;
