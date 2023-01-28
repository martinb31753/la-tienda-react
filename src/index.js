import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ujKEP0pT_rV5_gJ3YU8ygLlcx3oKDVU",
  authDomain: "tiendareact-202b7.firebaseapp.com",
  projectId: "tiendareact-202b7",
  storageBucket: "tiendareact-202b7.appspot.com",
  messagingSenderId: "204935585051",
  appId: "1:204935585051:web:07c6702a799825a39f47be"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  
  


