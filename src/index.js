import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/home.css';
import './assets/styles/sign-in.css';
import './assets/styles/profile.css';
import App from './components/cotainers/App';
import Store from './store';

const wrapper = document.getElementById('container');
ReactDOM.render(<Provider store={Store}><App /></Provider>, wrapper);
