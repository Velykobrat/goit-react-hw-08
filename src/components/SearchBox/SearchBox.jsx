import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
}

export default SearchBox;
