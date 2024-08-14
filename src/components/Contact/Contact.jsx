import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.listItem}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button onClick={handleDelete} className={styles.button}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
