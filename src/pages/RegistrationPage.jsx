import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  const headingStyle = {
    fontSize: '2rem',         // Розмір шрифту
    color: '#333',            // Колір шрифту
    textAlign: 'center',      // Вирівнювання тексту по центру
    marginBottom: '2rem',     // Відступ знизу
  }

  return (
    <div>
      <h1 style={headingStyle}>Register</h1>
      <RegistrationForm />
  </div>
  );
};

export default RegistrationPage;
