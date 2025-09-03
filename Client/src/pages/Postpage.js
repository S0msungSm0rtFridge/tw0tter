import '../StyleSheets/Postpage.css';
import { useState, useEffect } from 'react';
import { getPostByID, getUserByID } from '../asyncHelpers';

function PostPage({setWindowState, windowState}){ //page afte ryou click a post
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getPostByID(windowState[1])
            .then((data) => setPost(data))
            .catch((error) => console.log(error));
    }, [windowState]);

    // if (post){console.log(post);}

    useEffect(() => {
        if (post) {
            getUserByID(post.postBy)
                .then((data) => setUser(data))
                .catch((error) => console.log(error));
        }
    }, [post]);

    // if (user){console.log(user);}

    if (!user || !post){return(<div>Loading...</div>)}
    // console.log(user);
    return(
        <div className = "post-page-view">
            <button onClick={() => setWindowState(["home", null])}>backarrow</button>
            <div>POST</div>
            <div>
                <div>
                    {user.displayName}
                </div>
                <div className = "post-content">
                    {post.content}
                </div>
                <div className = "post-footer-metadata">
                    <div className = "post-footer-post-date">
                        {post.postedDate}
                    </div>
                    <div className = "post-footer-view-count">
                        {post.views}
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
        </div>
    );
}

export { PostPage }