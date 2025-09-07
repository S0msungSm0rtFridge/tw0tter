import '../StyleSheets/Mainpage.css';
import { LeftNavBar, RightNavBar } from '../components/ui/Navbars';
import { MainContent } from '../components/ui/contentParts';
import { Communities } from './Communities';
import { useCallback, useEffect, useState } from 'react';
import { PostPage } from './Postpage';
import { Profile_page } from './Profile_page.js';
import { FollowingPage } from './FollowPage.js';
import { SearchPage } from './SearchPage.js';

import { FollowProvider } from '../components/wrappers/FollowingContext.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//MIGHT WANT TO CHANGE THIS TO REACT ROUTES CAUSE NOW IT IS GETTING UNRULY AND TOP ENABLE USER EXPERIENCE (NEED BACK BUTTON AND SHIT LMAO)
function HomePage() {
    return (
        <FollowProvider>
            <div className = "homepage">
                <div className = "left-nav-Bar">
                    <LeftNavBar/>
                </div>
                <div className = "main-content">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/communities" element={<Communities />} />
                        <Route path="/post/:postId" element={<PostPage />} />
                        <Route path="/profile/" element={<Profile_page />} />
                        <Route path="/following" element={<FollowingPage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </div>
                <div className = "right-nav-bar">
                    <RightNavBar/>
                </div>
            </div>
        </FollowProvider >
    );
}

export default HomePage;