import { initializeApp } from 'firebase/app';

const API_KEY = import.meta.env.VITE_API;
const DOMAIN = import.meta.env.VITE_authDomain;
const DATABASE = import.meta.env.VITE_databaseURL;
const MESSAGING = import.meta.env.VITE_messagingSenderId;
const APPID = import.meta.env.VITE_appId;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: DOMAIN,
  databaseURL: DATABASE,
  projectId: 'nanny-services-61617',
  storageBucket: 'nanny-services-61617.appspot.com',
  messagingSenderId: MESSAGING,
  appId: APPID,
};

export const app = initializeApp(firebaseConfig);
