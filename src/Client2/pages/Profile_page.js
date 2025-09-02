import "./Profile_page.css"
import { useState } from "react";
import data from "../../twitterDummyData"
import { EditProfilePage } from "../parts/EditProfile";
function Profile_page({setWindowState}){

    const [isEditing, setisEditing] = useState(false);

    return (
        <div className="profile">
            <div className="top-bar">
                
            </div>
            <div className = "profile-page-banner">
                <img src="https://pbs.twimg.com/profile_images/1960356490335641600/K4hYYe3T_400x400.png" alt="nono" className="img"></img>
                <button onClick = { () =>  {setisEditing(true)}}>edit profile</button>
            </div>
            <div className = 'profile-page-meta-data'>
                <h1>Name</h1>
                <h5>@username</h5>
                <h5>Joined date</h5>
                <button onClick = { () => setWindowState(["following", null])}>Following</button>
                <button>Followers</button>
            </div>
            <div className = "profile-page-button-options">
                <button>Posts</button>
                <button>Replies</button>
                <button>Highlights</button>
                <button>Articles</button>
                <button>Media</button>
                <button>Likes</button>
            </div>
            <div className = "profile-page-content-options">

            </div>
            {/* Condiitonal render or edit page */}
            {isEditing && <EditProfilePage setisEditing={setisEditing}/>}
        </div>
    );
}

export { Profile_page }