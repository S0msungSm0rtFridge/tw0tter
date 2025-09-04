import '../StyleSheets/Mainpage.css';
import { LeftNavBar, RightNavBar } from '../components/ui/Navbars';
import { MainContent } from '../components/ui/contentParts';
import { Communities } from './Communities';
import { useCallback, useState } from 'react';
import { PostPage } from './Postpage';
import { Profile_page } from './Profile_page.js';
import { FollowingPage } from './FollowPage.js';
import { LoginPage } from '../components/features/Loginpage';


function HomePage() {
    const [windowState, setWindowState] = useState(["home", null]);

    const windowComponents = {
        login: <LoginPage />,
        home: <MainContent setWindowState={setWindowState} />,
        community: <Communities setWindowState={setWindowState} />,
        post: <PostPage />,
        profile: <Profile_page setWindowState={setWindowState} />,
        following: <FollowingPage setWindowState={setWindowState} />,
    };

    const CurrentWindow = windowComponents[windowState[0]] || null;
    const showNavbar = windowState[0] !== "login";

    if(!showNavbar) {
        return (
            <div className= "homepage no-nav">
                {CurrentWindow}
            </div>
        );
    }
    return (
        <div className="homepage">
            <div className="left-nav-Bar">
                <LeftNavBar setWindowState={setWindowState} />
            </div>

            <div className="main-content">
                {CurrentWindow}
            </div>

            <div className="right-nav-bar">
                <RightNavBar />
            </div>
        </div>
    );
}

export default HomePage;
