import twitterDummyData from "../../twitterDummyData"
import './Postpage.css';


function PostPage(post){
    return (
        <div className = "post-page-view">
            <div className = "post-header-metadata">
                <div className = "post-user-profile-picture">

                </div>
                <div className = "post-username">
                    {post.postedBy}
                </div>
            </div>
            <div className = "post-content">
                {post.content}
            </div>
            <div className = "post-footer-metadata">
                <div className = "post-footer-post-date">
                    {post.postedDate}
                </div>
                <div className = "post-footer-view-count">
                    
                </div>
            </div>
            <div className = "post-button-options">
                <button>retweet</button>
                <button>like</button>
                <button>bookmark</button>
                <button>share</button>
            </div>
            <div className = "post-reply-option">
                <textarea className = "post-footer-reply-option">

                </textarea>
                <button className = "post-reply-button">Reply</button>
            </div>
            <div className = "post-reply-section">
                {/* need to get all the replys to this post, will do when backend is finished so i dont have to rebase this shit later*/}
            </div>
        </div>
    )
}

export { PostPage }