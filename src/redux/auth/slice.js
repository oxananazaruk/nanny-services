import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerFulfilled: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = { email: action.payload.email, name: action.payload.name };
      state.token = action.payload.token;
    },
    registerRejected: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    loginPending: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginFulfilled: (state, action) => {
      console.log('action.payload', action.payload);
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = { email: action.payload.email, name: action.payload.name };
      state.token = action.payload.token;
    },
    loginRejected: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerPending,
  registerFulfilled,
  registerRejected,
  loginPending,
  loginFulfilled,
  loginRejected,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
