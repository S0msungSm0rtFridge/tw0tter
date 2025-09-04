import '../StyleSheets/Mainpage.css';
import { LeftNavBar, RightNavBar } from '../components/ui/Navbars';
import { MainContent } from '../components/ui/contentParts';
import { Communities } from './Communities';
import { useCallback, useEffect, useState } from 'react';
import { PostPage } from './Postpage';
import { Profile_page } from './Profile_page.js';
import { FollowingPage } from './FollowPage.js';
import { getUsers } from '../asyncHelpers.js';
import { LoginPage } from '../components/features/Loginpage';
import { SearchPage } from './SearchPage.js';


function HomePage() {
    const [windowState, setWindowState] = useState(["home", null]);
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, [setUsers])

    // console.log(setWindowState);
    const windowHandler = useCallback(() => {
        if (users.length === 0){
            return(<div></div>);
        }
        else{
            if(windowState[0] === "home"){
                return <MainContent setWindowState = {setWindowState} users = {users}/>
            }
            if(windowState[0] === 'community'){
                return <Communities setWindowState = {setWindowState}/>
            }
            if(windowState[0] === "post"){
                return <PostPage setWindowState = {setWindowState} windowState = {windowState} users = {users}/>
            }
            if(windowState[0] === "profile"){
                return <Profile_page setWindowState={setWindowState}/>
            }
            if(windowState[0] === "following"){
                return <FollowingPage setWindowState={setWindowState}/>
            }
        }
        if(windowState[0] === "search"){
            return <SearchPage searchInput = {windowState[1]} setWindowState={setWindowState}/>
        }
    }, [windowState, users]);

    return (
        <div className = "homepage">
            <div className = "left-nav-Bar">
                <LeftNavBar setWindowState={setWindowState}/>
            </div>

            <div className = "main-content">
                {windowHandler()} 
                
            </div>

            <div className = "right-nav-bar">
                <RightNavBar windowState={windowState} setWindowState={setWindowState}/>
            </div>
        </div>
    )
}

export default HomePage;