import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
palette: {
    primary: {
        main: '#FF6241'
    },
    secondary: {
        main:'#FFC145'
    }
}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
);
