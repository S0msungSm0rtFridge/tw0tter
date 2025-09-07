import '../StyleSheets/Postpage.css';
import { useState, useEffect, useCallback } from 'react';
import { getPostByID, getUserByID } from '../asyncHelpers';
import { useNavigate, useLocation, useParams  } from "react-router-dom";

function PostPage(){ //page afte ryou click a post

    const navigate = useNavigate();
    const { postId } = useParams();
    
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getPostByID(postId)
            .then((data) => setPost(data))
            .catch((error) => console.log(error));
    }, [postId]);

    // if (post){console.log(post);}

    useEffect(() => { //grab the appropriate user if there is a valid post
        if (post) {
            getUserByID(post.postBy)
                .then((data) => setUser(data))
                .catch((error) => console.log(error));
        }
    }, [post]);

    // go back one step in history
    const handleBackclick = useCallback(() => {
        navigate(-1); 
    }, [navigate]);    

    if (!user || !post){return(<div>Loading...</div>)} //make sure post and user has been grabbed
    // console.log(user);
    return(
        <div className="post-page-view">
            <div className="post-header">
                <button className="back-button" onClick={() => handleBackclick(post)}>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>
                </button>
                <h1 className="post-title">Post</h1>
            </div>
            
            <div className="main-post-container">
                <div className="post-user-info">
                    <div className="post-avatar">
                        <div className="avatar-circle">
                            <img src={user?.avatar}></img>
                        </div>
                    </div>
                    <div className="post-user-details">
                        <div className="post-display-name">{user.displayName}</div>
                        <div className="post-username">@{user.username}</div>
                    </div>
                    <button className="follow-button">Follow</button>
                </div>
                
                <div className="post-content">
                    {post.content}
                </div>
                
                <div className="post-footer-metadata">
                    <div className="post-time">
                        {<FormatDateTime datetime = {post.postDate}/>}
                    </div>
                    <div className="post-stats">
                        <span className="post-views">{post.views} views</span>
                    </div>
                </div>
                
                <div className="post-actions">
                    <button className="action-button reply-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M14.046 2.242l-4.148-.01h-.016c-4.374 0-7.8 3.427-7.8 7.8 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c0-4.398-3.582-7.992-7.961-7.992zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.64-6.318 6.318-6.318h.016c3.66 0 6.318 2.476 6.318 5.886 0 2.172-1.034 4.1-2.64 5.33z"/>
                        </svg>
                        <span>{post.numReplies}</span>
                    </button>
                    <button className="action-button retweet-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.41l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/>
                        </svg>
                        <span>{post.numRetweet}</span>
                    </button>
                    <button className="action-button like-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/>
                        </svg>
                        <span>{post.numLikes}</span>
                    </button>
                    <button className="action-button bookmark-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                        <span>Bookmark</span>
                    </button>
                    <button className="action-button share-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                        </svg>
                        <span>Share</span>
                    </button>
                </div>
                
                <div className="reply-input-section">
                    <div className="reply-avatar">
                        <div className="avatar-circle">
                            <img src={user?.avatar}></img>
                        </div>
                    </div>
                    <div className="reply-input-container">
                        <textarea 
                            className="reply-textarea" 
                            placeholder="Tweet your reply"
                            rows="3"
                        />
                        <div className="reply-actions">
                            <button className="reply-submit-btn">Reply</button>
                        </div>
                    </div>
                </div>
                
                <div className="replies-section">
                    <Replies
                        setWindowState={setWindowState} 
                        windowState={windowState} 
                        post={post}
                        users={users}
                    />
                </div>
            </div>
        </div>
    );
}



export { PostPage }