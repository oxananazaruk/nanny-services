import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { filters: '' },
  reducers: {
    findNannies(state, action) {
      state.filters = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { findNannies } = filterSlice.actions;
