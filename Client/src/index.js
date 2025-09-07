import React from 'react';
import ReactDOM from 'react-dom/client';
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
    {user ? <HomePage /> : <LoginPage setUser={setUser}/>}
  </React.StrictMode>);
}

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
