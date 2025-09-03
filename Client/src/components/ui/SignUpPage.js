import '../../StyleSheets/SignupPage.css'

import { useState, useRef, useEffect } from 'react'
//this page will display when someone hits create account
function SignUpPage({setSigningUp}){

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const monthRef = useRef(null);
    const dayRef = useRef(null);
    const yearRef = useRef(null);


    const [daysInMonth, setDaysInMonth] = useState(31);

    const updateDays = () => {
        const month = parseInt(monthRef.current.value);
        const year = parseInt(yearRef.current.value) || new Date().getFullYear();

        if (!month) return;

        const days = new Date(year, month, 0).getDate();
        setDaysInMonth(days);   
    };

    const validateArgs = () => {
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const month = monthRef.current.value;
        const day = dayRef.current.value;
        const year = yearRef.current.value;
        if(name.length === 0 || phone.length === 0 || month.length === 0 || day.length === 0 || year.length === 0){
            alert("Please fill out all fields")
            return false;
        }
        if(!/^\d+$/.test(phone)){
            alert("Please enter a valid phone number")
            return false;
        }
        const dob = new Date(year, month - 1, day);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if(age < 13){
            alert("You must be at least 13 years old to sign up")
            return false;
        }
        return true;
    }

    return(
        <div className = "Sign-up-page-main-container">
            <div className = "Sign-up-page-header-options">
                <button className = "x-button" onClick = {() => setSigningUp(false)}>X</button>
                <h2 className = "Sign-up-page-title">Create your account</h2>
            </div>
            <div className = "sign-up-page-content-area">
                <input className = "sign-up-page-name-input" placeholder="Name" maxLength={50} type="text" required ref = {nameRef}></input>
                <input className = "sign-up-page-name-input" placeholder="Phone Number" type="Number" pattern="\d+" required ref = {phoneRef}></input>
                <h3>Date Of Birth</h3>
                <div className = "sign-up-page-date-of-borth-selectors">
                    <select ref={monthRef} onChange={updateDays}>
                        <option value="" disabled selected>Month</option>
                            {[...Array(12)].map((_, i) => (
                                <option key={i+1} value={i + 1}>
                                    {new Date(0, i).toLocaleString('default', { month: 'long' })}
                                </option>
                                ))}
                    </select>
                    <select>
                        <option value="" disabled selected>Day</option>
                            {[...Array(daysInMonth)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                    </select>
                    <select ref={yearRef} onChange={updateDays}>
                        <option value="" disabled selected>Year</option>
                            {[...Array(100)].map((_, i) => {
                                const year = new Date().getFullYear() - i;
                                return <option key={year} value={year}>{year}</option>;
                            })}
                    </select>
                </div>
            </div>
            <button className = "sign-up-page-next-button" onClick={() => validateArgs()}>Next</button>
        </div>
    )
}

function SignInPage({setSigningIn}){

    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const validateArgs = () => {
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        if(name.length === 0 || password.length === 0){
            alert("Please fill out all fields")
            return false;
        }
        return true;
    }

    return (
        <div className = "Sign-up-page-main-container">
            <div className = "Sign-up-page-header-options">
                <button className = "x-button" onClick = {() => setSigningIn(false)}>X</button>
                <h2 className = "Sign-up-page-title">Sign Into Your Account</h2>
            </div>
            <div className = "sign-up-page-content-area">
                <input className = "sign-up-page-name-input" placeholder="Name" maxLength={50} type="text" required ref = {nameRef}></input>
                <input className = "sign-up-page-name-input" placeholder="Password" type="text" required ref = {passwordRef}></input>
            </div>
            <button className = "sign-up-page-next-button" onClick = { () => {validateArgs()}}>Next</button>
        </div>
    )
}

export { SignUpPage, SignInPage }