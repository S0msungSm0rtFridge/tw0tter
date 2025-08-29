import './contentParts.css';
import twitterDummyData from '../../twitterDummyData';
import { postBox } from '../smallPieces/postBox';
import { PostPage } from '../pages/Postpage';

function MainContent({setState}){

    return (
        <div className = "main-content-items">
            <div className = "cain-content--nav -bar">
                <button>For You</button>
                <button>Following</button>
            </div>
            <div className = "post-creation-area">
                <textarea placeholder = "What's happening?"></textarea>
                {/*add biuttons to add photos, links giffs and shit */}
                <button>Post</button>
            </div>
            <div className = "content-area" onClick = { () => console.log("pressed a post")}>
                <div>{twitterDummyData.posts.map((post) => postBox(post, setState))}</div>
            </div>
        </div>
    )
}

export {MainContent}