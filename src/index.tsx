import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppMenu } from './AppMenu';
import 'bootstrap/dist/css/bootstrap.css' ;

const button = document.querySelector('.button') as HTMLButtonElement;
const nav = document.querySelector('.nav') as HTMLElement;
const header = document.querySelector('.header') as HTMLElement;

button.addEventListener('click', (): void => {
  nav.classList.toggle('activo')
});

const root = 
  document.getElementById('root') as HTMLElement;

const rootMenu =
  document.getElementById('rootMenu') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
ReactDOM.render(
  <React.StrictMode>
    <AppMenu />
  </React.StrictMode>,
  rootMenu
);

