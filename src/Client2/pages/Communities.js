import { postBox } from "../smallPieces/postBox"
import twitterDummyData from "../../twitterDummyData"
import './Communities.css';

function Communities({setState}){
    return (
        <div className = "Communities-main-page">
            <textarea className = "Communities-page-search-bar"></textarea>
            <div className = "Communities-sliding-choose-bar">
                <ul className = "communitiy-sliding-choose-bar-options">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                    <li>item 5</li>
                    <li>item 6</li>
                </ul>
            </div>
            <div className = "communities-post-listings">
                {/** THIS NEEDS TO GET CHANGED POER COMMUNITY JUST DOING ALL POST RN*/}
                {twitterDummyData.posts.map( (post) => postBox(post, setState))}
            </div>

        </div>
    )
}

export { Communities }