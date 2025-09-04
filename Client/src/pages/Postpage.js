import '../StyleSheets/Postpage.css';
import { useState, useEffect, useCallback } from 'react';
import { getChildrenPosts, getPostByID, getUserByID,  } from '../asyncHelpers';

function Replies({setWindowState, windowState, post, users}){
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        getChildrenPosts(post.postID).then((data) => setReplies(data)).catch((error) => console.error(error));
    }, [post])


    return(
        <div>
            {replies.map((reply) => (
                <div key={reply.postID}>
                    {users.find((user) => user.userID === reply.postBy).displayName}
                    {users.find((user) => user.userID === reply.postBy).username}
                    {reply.content}
                    <button>replies</button>
                    <button>retweets</button>
                    <button>followers</button>
                    <div>{reply.views}</div>
                </div>
            ))}
        </div>
    );
}


function PostPage({setWindowState, windowState, users}){ //page afte ryou click a post
    const [post, setPost] = useState(null); //post to be displayed
    const [user, setUser] = useState(null); //user that made the post

    useEffect(() => { //grab the correct post every time a post is clicked
        getPostByID(windowState[1])
            .then((data) => setPost(data))
            .catch((error) => console.log(error));
    }, [windowState]);

    // if (post){console.log(post);}

    useEffect(() => { //grab the appropriate user if there is a valid post
        if (post) {
            getUserByID(post.postBy)
                .then((data) => setUser(data))
                .catch((error) => console.log(error));
        }
    }, [post]);

    const handleBackclick = useCallback(() => setWindowState(["home", null]), [setWindowState]); //handle the back arrow
    // if (user){console.log(user);}

    if (!user || !post){return(<div>Loading...</div>)} //make sure post and user has been grabbed
    // console.log(user);
    return(
        <div className = "post-page-view">
            <div className="post-header">
                <button className="back-button" onClick={ handleBackclick }>←</button>
                <h1 className="post-title">Post</h1>
            </div>
            <div>
                <div>
                    <div>{user.displayName}</div>
                    <div>@{user.username}</div>
                </div>
                <div className = "post-content">
                    {post.content}
                </div>
                <div className = "post-footer-metadata">
                    <div className = "post-footer-post-date">
                        {post.postedDate}
                    </div>
                    <div className = "post-footer-view-count">
                        {post.views} views
                    </div>
                </div>
                <div className = "post-button-options">
                    <button>💬</button>
                    <button>🔄</button>
                    <button>❤️</button>
                    <button>🔖</button>
                    <button>📤</button>
                </div>
                <div className = "post-reply-option">
                    <textarea className = "post-footer-reply-option" placeholder="Tweet your reply">
                    </textarea>
                    <button className = "post-reply-button">Reply</button>
                </div>
                <div className = "post-reply-section">
                    <Replies  //function to display all replies
                        setWindowState = {setWindowState} 
                        windowState = {windowState} 
                        post = {post}
                        users = {users}
                    />
                </div>
            </div>
        </div>
    );
}



export { PostPage }