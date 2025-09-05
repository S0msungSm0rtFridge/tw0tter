import '../../StyleSheets/SmallUserProfile.css'

//the user profiles when clicking on following or followers on profile page
//small version of the full user profile
function SmallUserProfile({user, following}){




    return (
        <div className ="small-user-side-profile-container">
            <div className = "small-user-profile-header">
                <img className="post-avatar" src={user?.avatar} alt={user?.username} />
                <div className = "small-user-profile-name">{user?.username}</div>
                <div className = "small-user-profile-tage">{user?.displayName}</div>
                <button className = "small-user-profile-following-button">Following</button>
            </div>
            <div className = "small-user-profile-bio"></div>
        </div>
    )
}

//ALL THE CONTENT WILL BE ADDED WHEN DB IS ADDED SO I CAN ATUALLY FETCH DATA

export { SmallUserProfile }