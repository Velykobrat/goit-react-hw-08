// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css'; 

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <button className={css.logoutButton} onClick={handleLogOut}>LogOut</button>
  );
};

export default UserMenu;
