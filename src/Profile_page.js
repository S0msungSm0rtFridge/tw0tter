import "./Profile_page.css"
import data from "./twitterDummyData"

export default function ProfilePage(){

    return (
        <div>
            <div class="top-bar">
                <h1>NAME</h1>
                <h5>#Posts</h5>
            </div>
            <div class="profile">
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1960356490335641600/K4hYYe3T_400x400.png" alt="nono" class="img"></img>
                    <button>edit profile</button>
                </div>
                <div>
                    <h1>Name</h1>
                    <h5>@username</h5>
                    <h5>Joined date</h5>
                    <h5>Biography</h5>
                </div>
                <div>
                    <button>Following</button>
                    <button>Followers</button>
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
            
        </div>
    );
}

function FollowPage(){
    return (
        <div>
            <div className="top-bar">
                <h1>NAME</h1>
                <h5>@userName</h5>
                <button>Followers</button>
                <button>Following</button>
            </div>
            <div className="profile">Placeholder</div>
        </div>
    );
}

function EditProfile(){
    return(
        <div>
            <div className="top-bar">
                <h1>Edit Profile</h1>
                <button>Save</button>
            </div>
            <div className="profile">
                <textarea placeholder="Name"></textarea>
                <textarea palceholder="Bio"></textarea>
            </div>
        </div>
    );
}

export { ProfilePage, FollowPage, EditProfile }