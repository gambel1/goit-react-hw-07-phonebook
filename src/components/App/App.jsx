import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';
import { AppContainer, AppTitle } from './App.styled';
import { getContactError, getContactIsLoading } from 'redux/selectors';
import { fetchContacts } from 'api/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const isError = useSelector(getContactError);
  const isLoading = useSelector(getContactIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <div>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
      </div>
      <div>
        <AppTitle>Contacts</AppTitle>
        <Filter />
        {isError && <p>{isError}</p>}
        {isLoading && <Loader />}
        {!isLoading && <ContactsList />}
      </div>
    </AppContainer>
  );
}
