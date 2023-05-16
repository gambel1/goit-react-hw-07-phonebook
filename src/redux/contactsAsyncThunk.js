import { fetchContacts, addContacts, deleteContacts } from 'api/api';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [addContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
    [deleteContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
