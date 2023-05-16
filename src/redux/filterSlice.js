import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },

  reducers: {
    setContactFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setContactFilter } = filterSlice.actions;

