import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; // Переконайтесь, що шлях правильний
import Navigation from '../Navigation/Navigation'; // Замість імпортування іменованих експортів, використовуйте стандартні
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Перевірте, чи є це правильний доступ до стану

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
