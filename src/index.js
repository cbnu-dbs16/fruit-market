import React from 'react';
import { render } from "react-dom";
import App from './App';
import GlobalStyle from './styles/global';

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  rootElement
);
