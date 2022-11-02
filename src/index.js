import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './assets/fonts/Prata-Regular.ttf';
import './assets/fonts/Archivo/Archivo-Bold.ttf';
import './assets/fonts/Archivo/Archivo-SemiBold.ttf';
import './assets/fonts/Archivo/Archivo-Medium.ttf';
import './assets/fonts/Archivo/Archivo-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
