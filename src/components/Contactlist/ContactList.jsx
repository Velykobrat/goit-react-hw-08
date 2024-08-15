// ContactList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/slice'; 
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    console.log('Fetching contacts...');
    dispatch(fetchContacts()); // Завантаження контактів при монтуванні
  }, [dispatch]);

  if (filteredContacts.length === 0) {
    return <p>No contacts available</p>; // Відображення повідомлення, якщо контактів немає
  }

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <div className={styles.contactDetails}>
            <span className={styles.contactName}>{contact.name}</span>
            <span className={styles.contactNumber}>{contact.number}</span>
          </div>
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
