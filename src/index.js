import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8jfn_oj0Y85yhoSVkQZfJCSClR3sizs",
  authDomain: "liv-portfolio.firebaseapp.com",
  projectId: "liv-portfolio",
  storageBucket: "liv-portfolio.appspot.com",
  messagingSenderId: "801877586389",
  appId: "1:801877586389:web:078c6cac67ebe0166acd5c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);