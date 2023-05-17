import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    delContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { addContact, delContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
