import { PostBox } from './postBox';
import { useState, useEffect, useCallback } from 'react';
import { getPosts, getUsers } from '../../asyncHelpers';

//main content area of homepage, is the miiddle bar when logging on tiwtter
function MainContent({setWindowState}){

    const [posts, setPost] = useState([]); //list of all posts
    const [users, setUser] = useState([]); //list of all users

    useEffect(() => {
        getPosts().then((data) => setPost(data)).catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        getUsers().then((data) => setUser(data)).catch((error) => console.log(error)); //make it so that it updates on a change to  database
    }, []);

    const handlePostclick = useCallback((postID) => {
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
                <div>{posts.map(post => {return <PostBox 
                post={post} 
                user={users.find((user) => user.userID === post.postID)}
                handlePostClick = {handlePostclick}
                />})}</div> 
            </div>
        </div>
    )
}

export {MainContent}