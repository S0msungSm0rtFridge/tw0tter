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

    useEffect(() => {
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

    if (!user || !post){return(<div>Loading...</div>)}
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
                    {/* need to get all the replys to this post, will do when backend is finished so i dont have to rebase this shit later*/}
                </div>
            </div>
        </div>
    );
}

export { PostPage }