import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { filters: '' },
  reducers: {
    findNannies(state, action) {
      state.filters = action.payload;
      console.log('state.filters', state.filters);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { findNannies } = filterSlice.actions;
