// ConfirmDeleteModal.jsx
// ConfirmDeleteModal.jsx
import PropTypes from 'prop-types';
import styles from './ConfirmDeleteModal.module.css';

function ConfirmDeleteModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <p>Are you sure you want to delete this contact?</p>
        <button onClick={onConfirm} className={styles.confirmButton}>Yes</button>
        <button onClick={onCancel} className={styles.cancelButton}>No</button>
      </div>
    </div>
  );
}

ConfirmDeleteModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmDeleteModal;
