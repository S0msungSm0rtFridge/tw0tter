import './LoginPage.css';

function LoginPage(){

    return (

        <div className = "login-page-main-container">
            <div className = "login-page-left-side-logo"></div>
            <div className = "login-page-right-side-content">
                <h1 className = "login-page-main-header">Happening Now</h1>
                <h3 className = "login-page-sub-header">Join Today</h3>
                <div className = "login=page-signup-options">
                    <button className = "login-page-signup-with-google">Sign Up with google</button>
                    <button className = "login-page-signup-with-apple">Sign Up with apple</button>
                    <span className = "login-page-divider"></span>
                    <button className = "login-page-signup-with-us">Create Account</button>
                </div>
                <div className = "login=page-login-options">
                    <div className = "login-page-login-header">Already have an account?</div>
                    <button className = "login-page-login-with-us">Sign In</button>

                </div>
            </div>
        </div>
    )
}

export { LoginPage }