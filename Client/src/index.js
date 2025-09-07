import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import {ProfilePage, FollowPage, EditProfile} from './Client/Components/Profile_page.js';
// import {LoginPage} from "./Client/Components/login.js"
import { useState } from 'react';
import HomePage from './pages/Mainpage.js';
import {LoginPage} from './components/features/Loginpage.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const [user, setUser] = useState(null);
  return(
  <React.StrictMode>
    <Router>
      {/* ADD A AUTHENTICAITION CHECKER BEFORE REOUTES AND ADD AUTHNETICATION ROUTE change home from * to /home/* after auth  page is made */}
      <Routes>
          <Route path = "/*" element={< HomePage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
