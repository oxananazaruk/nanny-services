import { initializeApp } from 'firebase/app';

const VITE_API = import.meta.env.VITE_API;
// const VITE_AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN;
// const VITE_DATABASEURL = import.meta.env.VITE_DATABASEURL;
// const VITE_APPID = import.meta.env.VITE_APPID;

const firebaseConfig = {
  apiKey: VITE_API,
  authDomain: 'nanny-services-61617.firebaseapp.com',
  databaseURL:
    'https://nanny-services-61617-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nanny-services-61617',
  storageBucket: 'nanny-services-61617.appspot.com',
  messagingSenderId: '38815472902',
  appId: '1:38815472902:web:521b7836157eec4af45287',
};

export const app = initializeApp(firebaseConfig);
