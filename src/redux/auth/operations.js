import { app } from '../../firebase';
// import {
//   registerPending,
//   registerFulfilled,
//   registerRejected,
//   loginPending,
//   loginFulfilled,
//   loginRejected,
// } from './slice';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

const auth = getAuth(app);

import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      // __________________________________
      console.log(' user', user);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      const token = await user.getIdToken();
      return { email: user.email, name, token };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { user } = userCredential;
      // --------------------------------
      console.log(' userLogin', user);
      const token = await user.getIdToken();
      const name = user.displayName;
      return { email: user.email, name, token };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
