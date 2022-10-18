import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    critical: 'purple',
    worning: 'red',
    normal: 'teal',
    good: 'green',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

//{/* <BrowserRouter basename="/goit-react-hw-01-components/">
//  <App />
//</BrowserRouter>; */}
