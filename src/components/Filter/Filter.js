import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/contactsAsyncThunk';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </FilterWrapper>
  );
}
