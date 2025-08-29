import './Mainpage.css';
import twitterDummyData from '../../twitterDummyData';
import { LeftNavBar, RightNavBar } from '../parts/Navbars';
import { MainContent } from '../parts/contentParts';
import { Communities } from './Communities';
import { useState } from 'react';
import { PostPage } from './Postpage';
import { Profile_page } from './Profile_page.js';
import { FollowingPage } from './FollowPage.js';


function HomePage() {
    const [windowState, setWindowState] = useState(["home", null]);
    const windowHandler = () => {
        if(windowState[0] === "home"){
            return <MainContent setState = {setWindowState}/>
        }
        if(windowState[0] === 'commuinity'){
            return <Communities setState = {setWindowState}/>
        }
        if(windowState[0] === "post"){
            let foundPost = twitterDummyData.posts.find((post) => post.postID === windowState[1]);
            return <PostPage post = {foundPost}/>
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
