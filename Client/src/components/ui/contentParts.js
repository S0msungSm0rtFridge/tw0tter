import { PostBox } from './postBox';
import { useState, useEffect } from 'react';
import { getPosts, getUsers } from '../../asyncHelpers';

function MainContent({setWindowState}){

    const [posts, setPost] = useState([]);
    const [users, setUser] = useState([]);

    useEffect(() => {
        getPosts().then((data) => setPost(data)).catch((error) => console.log(error));
        getUsers().then((data) => setUser(data)).catch((error) => console.log(error)); //make it so that it updates on a change to  database
    }, []);

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
                <div>{posts.map(post => {return <PostBox post={post} setWindowState={setWindowState} user={users.find((user) => user.userID === post.postID)}/>})}</div> 
            </div>
        </div>
    )
}

export {MainContent}