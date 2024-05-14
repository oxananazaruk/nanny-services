import {
  getDatabase,
  ref,
  query,
  limitToFirst,
  get,
  orderByKey,
  startAfter,
} from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const database = getDatabase();

export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async ({ limit, lastKey }, { rejectWithValue }) => {
    try {
      let nanniesQuery = query(
        ref(database, 'nannies'),
        orderByKey(),
        limitToFirst(limit)
      );

      if (lastKey) {
        nanniesQuery = query(
          ref(database, 'nannies'),
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(limit)
        );
      }

      const snapshot = await get(nanniesQuery);
      if (!snapshot.exists()) {
        return [];
      }

      const nannies = [];
      snapshot.forEach((childSnapshot) => {
        nannies.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });

      return nannies;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
