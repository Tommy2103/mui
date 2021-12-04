import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
