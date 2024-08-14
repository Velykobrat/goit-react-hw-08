import React, { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../Contactlist/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import styles from './App.module.css';


const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Book</h1>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;