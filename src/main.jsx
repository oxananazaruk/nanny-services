import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/nanny-services">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
