import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://64621c2f491f9402f4b2b082.mockapi.io/contacts/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}`, contact);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${contactId}`);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
