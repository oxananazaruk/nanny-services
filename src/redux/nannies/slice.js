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
    lastKey: null,
    message: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, handlePending)
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length === 0) {
          state.message = 'Thats all nannies';
        }
        const idsToCheck = state.items.map((item) => item.id);
        const filteredItems = action.payload.filter(
          (item) => !idsToCheck.includes(item.id)
        );
        state.items = [...state.items, ...filteredItems];
        if (action.payload.length > 0) {
          state.lastKey = action.payload[action.payload.length - 1].id;
        }
      })
      .addCase(fetchNannies.rejected, handleRejected);
  },
});

export const nanniesReducer = nanniesSlice.reducer;
