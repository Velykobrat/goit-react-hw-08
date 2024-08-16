import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  const headingStyle = {
    fontSize: '2rem',         // Розмір шрифту
    color: '#333',            // Колір шрифту
    textAlign: 'center',      // Вирівнювання тексту по центру
    marginBottom: '2rem',     // Відступ знизу
  };

  return (
    <div>
      <h1 style={headingStyle}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
