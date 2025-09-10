import '../../StyleSheets/LoginPage.css';
import { SignUpPage, SignInPage } from '../ui/SignUpPage';
import { useState } from 'react';
//basic login page, lacks any auth and is not funvctional current;ly
function LoginPage({setUser}){

    const [SigningIn, setSigningIn] = useState(false);
    const [SigningUp, setSigningUp] = useState(false);

    return (

        <div className = "login-page-main-container">
            {SigningUp && <SignUpPage setSigningUp={setSigningUp} setUser={setUser}/>}
            {SigningIn && <SignInPage setSigningIn={setSigningIn} setUser={setUser}/>}
            <div className = "login-page-left-side-logo"></div>
            <div className = "login-page-right-side-content">
                <h1 className = "login-page-main-header">Happening Now</h1>
                <h3 className = "login-page-sub-header">Join Today</h3>
                <div className = "login-page-signup-options">
                    <button className = "login-page-signup-with-us" onClick = { () => {setSigningUp(true)}}>Create Account</button>
                </div>
                <div className = "login-page-login-options">
                    <div className = "login-page-login-header">Already have an account?</div>
                    <button className = "login-page-login-with-us" onClick = { () => {setSigningIn(true)}}>Sign In</button>

                </div>
            </div>
        </div>
    )
}

export { LoginPage };