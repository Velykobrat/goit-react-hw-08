// ContactList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice'; 
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

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
