import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const button = (document.querySelector('.button') as HTMLButtonElement)
const nav = (document.querySelector('.nav') as HTMLElement)

button.addEventListener('click', (): void => {
  nav.classList.toggle('activo')
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

