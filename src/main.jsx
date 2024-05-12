import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';
import { BrowserRouter } from 'react-router-dom';
// import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA9wuULBk_yO0yI8nP_jkWCAvnV_T1hOrM',
//   authDomain: 'nanny-services-61617.firebaseapp.com',
//   databaseURL:
//     'https://nanny-services-61617-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'nanny-services-61617',
//   storageBucket: 'nanny-services-61617.appspot.com',
//   messagingSenderId: '38815472902',
//   appId: '1:38815472902:web:06ad75f18b1fc69cf45287',
// };

// export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/nanny-services">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
