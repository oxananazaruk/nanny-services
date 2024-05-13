import { app } from '../../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
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

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        const name = user.displayName;
        const email = user.email;
        return { email, name };
        // await onAuthStateChanged(auth, (user) => {
        //   if (user) {
        //     console.log('user', user);
        //     const name = user.displayName;
        //     const email = user.email;
        //     console.log('user name', name);
        //     console.log('user email', email);

        //     return { email: user.email, name: user.displayName };
      }
      return rejectWithValue('Unable to fetch user');
      // });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
