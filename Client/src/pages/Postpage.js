import '../StyleSheets/Postpage.css';
import { useState, useEffect } from 'react';
import { getPosts, getUsers } from '../asyncHelpers';

function PostPage(){ //page afte ryou click a post
    return(
        <div className = "post-page-view">
            <div>
                <div>
                    {}
                </div>
                <div className = "post-content">
                    {/* {post.content} */}
                </div>
                <div className = "post-footer-metadata">
                    <div className = "post-footer-post-date">
                        {/* {post.postedDate} */}
                    </div>
                    <div className = "post-footer-view-count">
                    
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