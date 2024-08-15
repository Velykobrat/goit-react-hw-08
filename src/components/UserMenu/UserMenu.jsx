// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <button onClick={handleLogOut}>Log Out</button>
  );
};

export default UserMenu;
