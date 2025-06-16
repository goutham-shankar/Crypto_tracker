import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserView, MobileView } from 'react-device-detect';

ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


