import { PostBox } from './postBox';
import { useState, useEffect, useCallback } from 'react';
import { getPosts, getUsers } from '../../asyncHelpers';

function MainContent({setWindowState, users}){

    const [posts, setPost] = useState([]); //list of all posts

    useEffect(() => {
        getPosts().then((data) => setPost(data)).catch((error) => console.log(error));
    }, []);
    // console.log("what is this");
    // console.log(users);
    const handlePostclick = useCallback((postID) => { //handler for post clicking
        setWindowState(["post", postID]);
    }, [setWindowState]);

    return ( 
        <div className = "main-content-items">
            <div className = "cain-content--nav--bar">
                <button>For You</button>
                <button>Following</button>
            </div>
            <div className = "post-creation-area">
                <textarea placeholder = "What's happening?"></textarea>
                {/*add biuttons to add photos, links giffs and shit */}
                <button>Post</button>
            </div>
            <div className = "content-area" onClick = { () => console.log("pressed a post")}>
                <div>{posts.map(post => {return <PostBox //call of postBox to display every post
                post={post} 
                user={users.find((user) => user.userID === post.postBy)}
                handlePostClick = {handlePostclick}
                key={post.postID}
                />})}</div>  
            </div>
        </div>
    )
}

export {MainContent}