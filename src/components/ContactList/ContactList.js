import { selectFilter, selectContacts } from 'redux/selectors';
import { deleteContacts } from 'api/api';

import {
  ContactListUl,
  ContactListLi,
  ContactListSpan,
  ContactListButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactListUl>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListLi key={id}>
              <ContactListSpan>{name}</ContactListSpan>
              <ContactListSpan>{number}</ContactListSpan>
              <ContactListButton
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                Delete
              </ContactListButton>
            </ContactListLi>
          );
        })}
      </ContactListUl>
    </>
  );
}
