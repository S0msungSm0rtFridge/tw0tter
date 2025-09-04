import '../../StyleSheets/postbox.css';
<<<<<<< HEAD

function PostBox({post, user, handlePostClick}) {
    if (!user || !post) return(<div></div>); //just make sure that post and user exist so no crash
=======
import axios from 'axios';
import { getUserByID } from '../../asyncHelpers';
import { useState, useEffect } from 'react';
//why are we importing a user???
//im changing to userID and we import here when we actually need it
function PostBox({post, userID, handlePostClick}) {
    const [user, setUser] = useState(null);
>>>>>>> 2988f87e70d3b09c17efc8618fbe9048c54a5cf4
    // console.log("postID is: ");
    // console.log(post);

    //find user when  post is clicked on
    useEffect(() => {
        const getUser = async (userID) => {
            try{
                const u = await getUserByID(userID);
                setUser(u.data);
                return u;
            } catch (err){
                console.log(err);
            }
        }
        getUser(post.postBy).then(userData => {
            setUser(userData);
        })
    }, [post]);

    return (
<<<<<<< HEAD
        <div key={post.postID} className="post-box" onClick={() => handlePostClick(post.postID)}>
            <img className="post-avatar" src={user.avatar} alt={user.username} />
=======
        <div className="post-box" onClick={() => handlePostClick(post.postID)}>
            <img className="post-avatar" src={user?.avatar} alt={user?.username} />
>>>>>>> 2988f87e70d3b09c17efc8618fbe9048c54a5cf4
            <div style={{flex: 1}}>
                <div className="post-user-info">
                    <span className="post-user-name">{user?.displayName}</span>
                    <span className="post-user-handle">@{user?.username}</span>
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