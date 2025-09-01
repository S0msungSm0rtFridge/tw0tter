// import './Mainpage.css';
// import twitterDummyData from "../twitterDummyData";
import { getPosts } from './asyncHelpers';
import { useEffect, useState } from 'react';
import '../Style Sheets/Mainpage.css';

function HomePage() {
    return (
        <div className = "homepage">
            <div className = "left-nav-Bar">
                {leftNavBar()}
            </div>

            <div className = "main-content">
                {mainContent()}
            </div>

            <div className = "right-nav-bar">
                {rightNavBar()}
            </div>
        </div>
    )
}


function leftNavBar(){
    return (
        <div>
            <div className = "'logo"> Add Logo Here </div>
            <ul className = "left-nav-bar-objects">
                <li>Home</li>
                <li>Explore</li>
                <li>Notification</li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Jobs</li>
                <li onClick = { () => console.log("this was pressed")}>Communities</li>
                <li>Premium</li>
                <li>Verified Orgs</li>
                <li>Profile</li>
                <li>More</li>
            </ul>
        </div>

    )
}

function rightNavBar(){
    return (
        <div className = "right-nav-bar-objects">
            <input type = "text" placeholder = "Search Tw0tter"></input>
            <button className = "shameless-plug">SubScribe</button>
            <div className = "trending-section">
                <h3>Trending For People Like You</h3>
                <ul className = "trending-list">
                    <li>Trending 1</li>
                    <li>Trending 2</li>
                    <li>Trending 3</li>
                    <li>Trending 4</li>
                </ul>
            </div>
        </div>
    )
}

function mainContent(){
    return (
        <div className = "main-content-items">
            <div className = "cain-content--nav--bar">
                <button>For You</button>
                <button>Following</button>
            </div>
            <div className = "post-creation-area">
                <textarea placeholder = "What's happening?"></textarea>
                {/*add biuttons to add photos, links giffs and shit */}
                <button>Post</button>
            </div>
            <div className = "content-area">
                <div><PostListing/></div>
            </div>
        </div>
    )
}

function PostListing(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => setPosts(data)).catch(error => console.error(error));
    }, []);

    return (
        <div>
            {posts.map(post => {<ul><PostBox post = {post}/></ul>})}
        </div>
    );
}  

function PostBox(post){
    return (
        <div className = "post-box">
            <div className = "post-meta-data">
                <div className = "post-user-name">{post.postBy}</div>
                <div className = "post-date">{post.postDate}</div>
            </div>
            <div className = "main-post-content">{post.content}</div>
            <div className = "main-post-footer">
                <button>reply</button>
                <button>retweet</button>
                <button>like</button>
                <button>views</button>
                <button>bookmark</button>
                <button>share</button>
            </div>
        </div>
    )
}
export default HomePage;
