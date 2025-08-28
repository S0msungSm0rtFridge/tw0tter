import { twitterDummyData }  from "../twitterDummyData";
import React, { use, useState } from "react";

function SignIn({ goBack }){
    const [text, setText] = useState("");
    const [error, setError] = useState(false);
    const [signin, setsignin] = useState("");
    
    if (signin === "ready"){
        if (!text){
            setsignin("");
            setError(true);
        }
        else{
            setError(false);
            const profiles = twitterDummyData.profiles;
            console.log(profiles);
            for (let i = 0; i < profiles.length; i++){
                if (profiles[i].username === text){
                    console.log("user found")
                }
            }
            console.log("user not found");
            setsignin("None");
        }
    }

    return(
        <div>
            <textarea placeholder="Enter Username" onChange={e => setText(e.target.value)}></textarea>
            <button onClick={() => {setsignin("ready")}}>Sign in</button>
            {error && <div>Username cannot be empty</div>}
            <button onClick={() => goBack()}>Back</button>
        </div>
    )
}

function SignUp({ goBack }){
    return(
        <div>
            <textarea placeholder="Enter Username"></textarea>
            <button>Sign up</button>
            <button onClick={() => goBack()}>Back</button>
        </div>
    )
}


function LoginPage(){
    const [click, setClick] = useState("None");
    if (click === "Start"){
        setClick("None");
        return <LoginPage/>
    }
    if (click === "Sign in"){return <SignIn goBack={() => setClick("Start")}/>}
    if (click === "Sign up"){return <SignUp goBack={() => setClick("Start")}/>}

    return(
        <div>
            <img src="https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE-1200-80.jpg" alt="Logo"></img>
            <button onClick={() => setClick("Sign in")}>Sign in</button>
            <button onClick={() => setClick("Sign up")}>Sign up</button>
        </div>
    );
}


export { LoginPage }