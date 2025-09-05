import '../../StyleSheets/postbox.css';
import axios from 'axios';
import { getUserByID, updatePostViews } from '../../asyncHelpers';
import { useState, useEffect } from 'react';
import { FormatDateTime } from '../features/helper';
//why are we importing a user???
//im changing to userID and we import here when we actually need it
function PostBox({post, userID, handlePostClick}) {
    const [user, setUser] = useState(null);
    // console.log("postID is: ");
    // console.log(post);

    //find user when  post is clicked on
    useEffect(() => {
        // const getUser = async (userID) => {
        //     try{
        //         const u = await getUserByID(userID);
        //         setUser(u.data);
        //         return u;
        //     } catch (err){
        //         console.log(err);
        //     }
        // }
        getUserByID(post.postBy)
            .then((data) => setUser(data))
            .catch((error) => console.error(error));
    }, [post]);

    return (
        <div className="post-box" onClick={() => {handlePostClick(post.postID); updatePostViews(post.postID)}}>
            <img className="post-avatar" src={user?.avatar} alt={user?.username} />
            <div style={{flex: 1}}>
                <div className="post-user-info">
                    <span className="post-user-name">{user?.displayName}</span>
                    <span className="post-user-handle">@{user?.username}</span>
                    <span className="post-date">· {<FormatDateTime datetime={post.postDate}/>}</span>
                </div>
                <div className="main-post-content">{post.content}</div>
                <div className="main-post-footer">
                    <button title="Reply">💬{post.numReplies}</button>
                    <button title="Retweet">🔁{post.numRetweet}</button>
                    <button title="Like">❤️{post.numLikes}</button>
                    <button title="Views">👁️{post.views}</button>
                    <button title="Bookmark">🔖</button>
                    <button title="Share">↗️</button>
                </div>
            </div>
        </div>
    );
}

export {PostBox}