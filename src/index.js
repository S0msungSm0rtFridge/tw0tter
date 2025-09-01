import React from 'react';
import ReactDOM from 'react-dom/client';
import './Client/Style Sheets/index.css';
// import {ProfilePage, FollowPage, EditProfile} from './Client/Components/Profile_page.js';
// import {LoginPage} from "./Client/Components/login.js"
import reportWebVitals from './Client/reportWebVitals.js';
import HomePage from './Client/Components/Mainpage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
