import { getDatabase, ref, query, limitToFirst, get } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const database = getDatabase();

export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async (_, { rejectWithValue }) => {
    try {
      const nanniesRef = ref(database, 'nannies');
      const nanniesQuery = query(nanniesRef, limitToFirst(3));
      const snapshot = await get(nanniesQuery);
      console.log('snapshot', snapshot);
      console.log('Snapshot exists:', snapshot.exists());
      const nanniesArray = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          console.log('Child Snapshot:', childSnapshot.val());
          nanniesArray.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        console.log('nanniesArray', nanniesArray);
        return nanniesArray;
      } else {
        return [];
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
