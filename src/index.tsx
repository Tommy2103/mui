import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, colors } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: "#121212"
    },
    text: {
      primary: colors.grey[50],
      secondary: colors.grey[200],
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
