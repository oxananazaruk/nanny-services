import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, handlePending)
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchNannies.rejected, handleRejected);
  },
});

export const nanniesReducer = nanniesSlice.reducer;
