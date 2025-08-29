import './Mainpage.css';
import twitterDummyData from '../../twitterDummyData';
import { leftNavBar, rightNavBar } from '../parts/Navbars';
import { MainContent } from '../parts/contentParts';
import { Communities } from './Communities';
import { useState } from 'react';
import { PostPage } from './Postpage';


function HomePage() {
    const [windowState, setWindowState] = useState(["home", null]);
    console.log(windowState);
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
    }

    return (
        <div className = "homepage">
            <div className = "left-nav-Bar">
                {leftNavBar(setWindowState)}
            </div>

            <div className = "main-content">
                {windowHandler()}
            </div>

            <div className = "right-nav-bar">
                {rightNavBar()}
            </div>
        </div>
    )
}

export default HomePage;
