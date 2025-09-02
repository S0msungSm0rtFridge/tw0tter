import './SmallUserProfile.css'

function SmallUserProfile(){
    return (
        <div className ="small-user-side-profile-container">
            <div className = "small-user-profile-header">
                <div className = "small-user-profile-profile-picture"></div>
                <div className = "small-user-profile-name">THIS IS A TEST</div>
                <div className = "small-user-profile-tage">THIS IS A TEST</div>
                <button className = "small-user-profile-following-button">Following</button>
            </div>
            <div className = "small-user-profile-bio"></div>
        </div>
    )
}

//ALL THE CONTENT WILL BE ADDED WHEN DB IS ADDED SO I CAN ATUALLY FETCH DATA

export { SmallUserProfile }