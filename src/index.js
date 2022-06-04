import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtjHfrMHXZxOllQ9sDcNr-_sX0eZWaTcE",
  authDomain: "ecommerce-3c836.firebaseapp.com",
  projectId: "ecommerce-3c836",
  storageBucket: "ecommerce-3c836.appspot.com",
  messagingSenderId: "181043202037",
  appId: "1:181043202037:web:9cffb2ebba126f114d02bc",
  measurementId: "G-JC61Z9RT2S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
