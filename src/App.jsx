import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser()); // Відновлення статусу авторизації при запуску
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          {/* Додайте маршрут для TasksPage, якщо потрібно */}
          {/* <Route path="/tasks" element={<TasksPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
