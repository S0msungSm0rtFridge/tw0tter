import { PostBox } from './postBox';
import { PostPage } from '../../pages/Postpage';


//main content area of homepage, is the miiddle bar when logging on tiwtter
function MainContent({setWindowState}){

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
                {/*should be post boxes instead of post page*/}
                <div><PostPage /></div>
            </div>
        </div>
    )
}

export {MainContent}