import '../../StyleSheets/postbox.css';

//small basic post
//us the post that is displayed everywhere on twitter
//clicking on it will set the state to post and the id of the post
function PostBox({post, setWindowState}){
    return (
        <div className = "post-box" onClick = { () => setWindowState(["post", post.postID])}>
            <div className = "post-meta-data">
                <div className = "post-user-name">{post.postedBy}</div>
                <div className = "post-date">{post.postedDate}</div>
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

export {PostBox}