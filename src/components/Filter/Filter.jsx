// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  //  const onFilterChange = e => {
  //    dispatch(setFilter(e.target.value));
  //  };

  const handleChangeFilter = e =>
    dispatch(filterContacts(e.target.value));

  return (
    <>
      <label htmlFor="findByName">Find contacts by name</label>
      <input
        id="findByName"
        className={s.filter}
        type="text"
        name="name"
        placeholder="Search contact"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleChangeFilter}
        value={filter}
      />
    </>
  );
};

// Filter.propTypes = {
//   handleChangeFilter: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default Filter;
