import { initializeApp } from 'firebase/app';

const VITE_API = import.meta.env.VITE_API;
const VITE_AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN;
const VITE_DATABASEURL = import.meta.env.VITE_DATABASEURL;
const VITE_APPID = import.meta.env.VITE_APPID;

const firebaseConfig = {
  apiKey: VITE_API,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: 'nanny-services-61617',
  storageBucket: 'nanny-services-61617.appspot.com',
  messagingSenderId: '38815472902',
  appId: VITE_APPID,
};

export const app = initializeApp(firebaseConfig);
