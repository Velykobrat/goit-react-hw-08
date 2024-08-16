import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contacts here"
      />
    </div>
  );
}
export default SearchBox;
