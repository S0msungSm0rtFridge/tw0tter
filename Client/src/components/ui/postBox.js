import '../../StyleSheets/postbox.css';

function PostBox({post, setWindowState, user}) {
    if (!user) return null;
    return (
        <div className="post-box" onClick={() => setWindowState(["post", post.postID])}>
            <img className="post-avatar" src={user.avatar} alt={user.username} />
            <div style={{flex: 1}}>
                <div className="post-user-info">
                    <span className="post-user-name">{user.displayName}</span>
                    <span className="post-user-handle">@{user.username}</span>
                    <span className="post-date">· {post.postDate}</span>
                </div>
                <div className="main-post-content">{post.content}</div>
                <div className="main-post-footer">
                    <button title="Reply">💬</button>
                    <button title="Retweet">🔁</button>
                    <button title="Like">❤️</button>
                    <button title="Views">👁️</button>
                    <button title="Bookmark">🔖</button>
                    <button title="Share">↗️</button>
                </div>
            </div>
        </div>
    );
}

export {PostBox}