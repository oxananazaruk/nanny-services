import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA9wuULBk_yO0yI8nP_jkWCAvnV_T1hOrM',
  authDomain: 'nanny-services-61617.firebaseapp.com',
  databaseURL:
    'https://nanny-services-61617-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nanny-services-61617',
  storageBucket: 'nanny-services-61617.appspot.com',
  messagingSenderId: '38815472902',
  appId: '1:38815472902:web:06ad75f18b1fc69cf45287',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
