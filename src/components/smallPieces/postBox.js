import './postbox.css';

function postBox(post){
    return (
        <div className = "post-box" onClick = { () => console.log("postBox was pressed")}>
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

export {postBox}