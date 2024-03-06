import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCUKmmMgSYnVJhndSjlbnskp1MZSb_XDEE",
    authDomain: "fir-db584.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    projectId: "fir-db584",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default db;
