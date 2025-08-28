import './Mainpage.css';
import twitterDummyData from '../../twitterDummyData';
import { leftNavBar, rightNavBar } from '../parts/Navbars';
import { mainContent } from '../parts/contentParts';

function HomePage() {
    return (
        <div className = "homepage">
            <div className = "left-nav-Bar">
                {leftNavBar()}
            </div>

            <div className = "main-content">
                {mainContent()}
            </div>

            <div className = "right-nav-bar">
                {rightNavBar()}
            </div>
        </div>
    )
}

export default HomePage;
