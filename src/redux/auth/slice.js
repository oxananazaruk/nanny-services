import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './operations';

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
  // reducers: {
  //   registerPending: (state) => {
  //     state.isLoading = true;
  //     state.error = null;
  //   },
  //   registerFulfilled: (state, action) => {
  //     state.isLoggedIn = true;
  //     state.isLoading = false;
  //     state.user = { email: action.payload.email, name: action.payload.name };
  //     state.token = action.payload.token;
  //   },
  //   registerRejected: (state, action) => {
  //     state.isLoggedIn = false;
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   loginPending: (state) => {
  //     state.isLoading = true;
  //     state.error = null;
  //   },
  //   loginFulfilled: (state, action) => {
  //     console.log('action.payload', action.payload);
  //     state.isLoggedIn = true;
  //     state.isLoading = false;
  //     state.user = { email: action.payload.email, name: action.payload.name };
  //     state.token = action.payload.token;
  //   },
  //   loginRejected: (state, action) => {
  //     state.isLoggedIn = false;
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = { email: action.payload.email, name: action.payload.name };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = { email: action.payload.email, name: action.payload.name };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = true;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
    // .addCase(refreshUser.pending, (state) => {
    //   state.isRefreshing = true;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.user = { email: action.payload.email, name: action.payload.name };
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // })
    // .addCase(refreshUser.rejected, (state) => {
    //   state.isRefreshing = false;
    // });
  },
});

// export const {
//   registerPending,
//   registerFulfilled,
//   registerRejected,
//   loginPending,
//   loginFulfilled,
//   loginRejected,
// } = authSlice.actions;

export const authReducer = authSlice.reducer;
