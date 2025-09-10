import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


// import {ProfilePage, FollowPage, EditProfile} from './Client/Components/Profile_page.js';
// import {LoginPage} from "./Client/Components/login.js"
import { useState } from 'react';
import HomePage from './pages/Mainpage.js';
import {LoginPage} from './components/features/Loginpage.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const [user, setUser] = useState(null);
  console.log("USER IS", user);
  return (
    <React.StrictMode>
      <Router>
        {/* ADD A AUTHENTICAITION CHECKER BEFORE REOUTES AND ADD AUTHNETICATION ROUTE change home from * to /home/* after auth  page is made */}
        <Routes>
          {/* Auth route */}
          <Route path="/auth" element={<LoginPage setUser={setUser} />} />

          {/* Protected app route */}
          <Route path="/home/*" element={
            user ? <HomePage /> : <Navigate to="/auth" replace />
          } />

          {/* Default redirect based on auth */}
          <Route path="/*" element={<Navigate to={user ? '/home' : '/auth'} replace />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

root.render(
  <App />
);
