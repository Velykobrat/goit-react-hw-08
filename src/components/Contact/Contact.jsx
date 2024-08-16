// Contact.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/slice';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import styles from './Contact.module.css';

function Contact({ id, name, number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles.listItem}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{number}</span>
        <button onClick={handleDelete} className={styles.button}>Delete</button>
      </li>
      {isModalOpen && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
