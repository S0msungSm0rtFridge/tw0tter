import './EditProfile.css'

function EditProfilePage({setisEditing}){
    console.log("this gets to here");
    return (
        <div className = "edit-profile-page-main-container-opaque">
            <div className = "edit-profile-page-header-options">
                <button className = "x-button" onClick = { () => setisEditing(false)}>X</button>
                <h2 className = "edit-profile-page-title">Edit Profile</h2>
                <button className = "edit-profile-page-save-button">Save</button>
            </div>

            <div className = "edit-profile-page-change-banner-option"></div>
            <div className = "edit-profile-page-change-profile-picture-option"></div>

            <div className = "edit-profile-page-change-text-information-area">
                <textarea className = "edit-profile-page-change-name"></textarea>
                <textarea className = "edit-profile-page-change-bio"></textarea>
                <textarea className = "edit-profile-page-change-location"></textarea>
            </div>
        </div>
    )
}

export { EditProfilePage }