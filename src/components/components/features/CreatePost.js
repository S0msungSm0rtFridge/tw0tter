import './CreatePost.css'

function CreatePost({setCreatingPost}){

    return (
        <div className = "create-post-page-main-container">
            <div className = "create-post-page-header">
                <button className = "create-post-page-x-button" onClick = { () => setCreatingPost(false)}>X</button>
                <button className = "create-post-page-draft-button">Drafts</button>
            </div>
            <div className = "create-post-page-main-content-area">
                <div className = "create-post-page-profile-pciture"></div>
                <textarea className = "create-post-page-post-content"></textarea>
            </div>
            <div className="create-post-page-footer-options">
                <button className="create-post-page-image">image</button>
                <button className="create-post-page-gif">gif</button>
                <button className="create-post-page-grok">grok</button>
                <button className="create-post-page-poll">poll</button>
                <button className="create-post-page-emoji">emoji</button>
                <button className="create-post-page-location">location</button>

            </div>
        </div>
    )
}

export { CreatePost }