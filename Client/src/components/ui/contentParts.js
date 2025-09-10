import { PostBox } from './postBox';
import { useState, useEffect, useCallback } from 'react';
import { getPosts, getUsers } from '../../asyncHelpers';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";


//main content area of homepage, is the miiddle bar when logging on tiwtter
function MainContent(){

    const navigate = useNavigate();
    const [newPostCont, setNewPostCont] = useState(null);
    const [submit, setsubmit] = useState(false);
    const [posts, setPost] = useState([]); //list of all posts

    useEffect(() => {
        getPosts().then((data) => setPost(data)).catch((error) => console.log(error));
    }, []);

    // useEffect(() => {
    //     getUsers().then((data) => setUser(data)).catch((error) => console.log(error)); //make it so that it updates on a change to  database
    // }, []);

    const handlePostclick = useCallback((postID) => {
        navigate(`post/${postID}`);
    }, [navigate]);

    return ( 
        <div className = "main-content-items">
            <div className = "cain-content--nav--bar">
                <button>For You</button>
                <button>Following</button>
            </div>
            <div className = "post-creation-area">
                <textarea value={newPostCont} onChange={(e) => {setNewPostCont(e.target.value)}} placeholder = "What's happening?"></textarea>
                {/*add biuttons to add photos, links giffs and shit */}
                <div>
                    {submit && !newPostCont ? <div>post content cannot be empty</div>: <div></div>}
                    <button>Post</button>
                </div>
            </div>
            <div className = "content-area">
                <div>{posts.map(post => {return <PostBox //call of postBox to display every post
                post={post} 
                userID={post.postedBy}
                handlePostClick = {handlePostclick}
                key={post.postID}
                />})}</div>  
            </div>
        </div>
    )
}

export {MainContent}