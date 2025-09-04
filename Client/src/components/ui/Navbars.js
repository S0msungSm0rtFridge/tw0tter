import '../../StyleSheets/Navbars.css';
import { CreatePost } from '../features/CreatePost';
import { useCallback, useState } from 'react';


//right and left nav bar
//eklf explanatory
function LeftNavBar({setWindowState}){
    const [CreatingPost, setCreatingPost] = useState(false);
    const handleHomeClick = useCallback(() => setWindowState(["home", null]), [setWindowState]);
    const handleCommunityClick = useCallback(() => setWindowState(["community", null]), [setWindowState]);
    const handleProfileClick = useCallback(() => setWindowState(["profile", null]), [setWindowState]);

    return (
        <div>
            <div className = "'logo"> Add Logo Here </div>
            <ul className = "left-nav-bar-objects">
                <li onClick = { handleHomeClick }>Home</li>
                <li>Explore</li>
                <li>Notification</li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Jobs</li>
                <li onClick = { handleCommunityClick }>Communities</li>
                <li>Premium</li>
                <li>Verified Orgs</li>
                <li onClick = { handleProfileClick }>Profile</li>
                <li>More</li>
            </ul>
            <button className = "left-nav-bar-post-button" onClick = { () => setCreatingPost(true)}>Post</button>

            {CreatingPost && <CreatePost setCreatingPost={setCreatingPost}/>}
        </div>

    )
}


//nothing in this section is funcitonal or even started
function RightNavBar(){
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


export { LeftNavBar, RightNavBar }