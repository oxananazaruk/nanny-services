import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './theme.js';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-display: swap;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    src: url('../public/fonts/HelveticaNeue-Regular.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    src: url('../public/fonts/HelveticaNeue Medium.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 600;
    src: url('../public/fonts/HelveticaNeue-Bold.ttf') format('ttf'); 
  }

    body {
        margin: 0;
        font-family: "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.text};
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 320px;
        padding: 0 20px;
        margin: 0 auto;
         @media (min-width: 768px) {
            width: 768px;
            padding: 0 32px;
        }
        @media (min-width: 1440px) {
            width: 1440px;
        }
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }
`;
