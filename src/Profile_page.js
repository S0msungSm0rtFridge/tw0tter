import "./Profile_page.css"
import { useState } from "react";
import data from "./twitterDummyData"

export default function Profile_page(){

    return (
        <div class="profile">
            <div class="top-bar">
                
            </div>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1960356490335641600/K4hYYe3T_400x400.png" alt="nono" class="img"></img>
                <button>edit profile</button>
            </div>
            <div>
                <h1>Name</h1>
                <h5>@username</h5>
                <h5>Joined date</h5>
            </div>
            <div>
                <button onClick={() => change_window("Following")}>Following</button>
                <button onClick={() => change_window("Followers")}>Followers</button>
            </div>
            <div>
                <button>Posts</button>
                <button>Replies</button>
                <button>Highlights</button>
                <button>Articles</button>
                <button>Media</button>
                <button>Likes</button>
            </div>
        </div>
    );
}