import '../StyleSheets/Mainpage.css';
import { LeftNavBar, RightNavBar } from '../components/ui/Navbars';
import { MainContent } from '../components/ui/contentParts';
import { Communities } from './Communities';
import { useState } from 'react';
import { PostPage } from './Postpage';
import { Profile_page } from './Profile_page.js';
import { FollowingPage } from './FollowPage.js';


function HomePage() {
    const [windowState, setWindowState] = useState(["home", null]);
    console.log(setWindowState);
    const windowHandler = () => {
        if(windowState[0] === "home"){
            return <MainContent setState = {setWindowState}/>
        }
        if(windowState[0] === 'commuinity'){
            return <Communities setState = {setWindowState}/>
        }
        if(windowState[0] === "post"){
            return <PostPage />
        }
        if(windowState[0] === "profile"){
            return <Profile_page setWindowState={setWindowState}/>
        }
        if(windowState[0] === "following"){
            return <FollowingPage setWindowState={setWindowState}/>
        }

    }

    return (
        <div className = "homepage">
            <div className = "left-nav-Bar">
                <LeftNavBar setWindowState={setWindowState}/>
            </div>

            <div className = "main-content">
                {windowHandler()}
            </div>

            <div className = "right-nav-bar">
                <RightNavBar />
            </div>
        </div>
    )
}

export default HomePage;
