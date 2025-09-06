import axios from "axios"
import "../StyleSheets/SearchPage.css"
import { useState, useCallback, useEffect } from "react";
import { PostBox } from "../components/ui/postBox";
import { SmallUserProfile } from "../components/ui/SmallUserProfile";
import { useNavigate, useLocation, useParams  } from "react-router-dom";



//need to add display list that can click to profile when searching anything
//need to add all tabs
//need to add filters
//need to change right navbar when on this page
function SearchPage() {

    const searchInput = useParams();
    const navigate = useNavigate();
    const [searchedValue, setsearchedValue] = useState(searchInput);
    const [SearchedPost, setSearchedPosts] = useState(null);
    const [SearchedUser, setSearchedUser] = useState(null);
    const [pageOption, setPageOption] = useState("Top");

    const serachFor = async (value) => {
        try{
            const [posts, users] = await Promise.all([
                axios.get(`/api/posts/search?search=${value}`),
                axios.get(`/api/users/search?search=${value}`)
            ]);
            setSearchedUser(users.data);
            setSearchedPosts(posts.data);
            return users;
        } catch (error){
            console.error("Failed to search for users", error);
        }
    }

    const handleKeyPress = async (event) => {
        if(event.key === "Enter"){
            const result =  await serachFor(searchedValue);
        }
    }

    const handlePostClick = useCallback((postID) => {
        navigate(`/post/${postID}`);
    }, [navigate]);
    
    //runs on first mount from nbavBar
    useEffect(() => {
        if (!searchInput) return; 

        const fetchPosts = async () => {
            try {
                const [posts, users] = await Promise.all([
                    axios.get(`/api/posts/search?search=${searchInput}`),
                    axios.get(`/api/users/search?search=${searchInput}`)
                ]);
                setSearchedUser(users.data);
                setSearchedPosts(posts.data);
                return users;
            } catch (err) {
                console.error(err);
            }
        };

        fetchPosts();
    }, [searchInput]);

    return (
        <div className="Search-Page-Container">
            <div className = "Search-Page-Header">
                <button className = "arrow"></button>
                {/* Search Results ADD LITTLE ICON IN SEARCH BAR*/}
                <input type = "text" placeholder = "Search"
                onChange = {(e) => setsearchedValue(e.target.value)}
                onKeyDown={handleKeyPress}></input>
                <button className = "search-button-advanced-options">...</button>
                <div className = "serach-bar-header-options">
                    <button className = "search-bar-header-options-button active" onClick = { () => setPageOption("Top")}>Top</button>
                    <button className = "search-bar-header-options-button">Latest</button>
                    <button className = "search-bar-header-options-button" onClick = { () => setPageOption("People")}>People</button>
                    <button className = "search-bar-header-options-button">Media</button>
                    <button className = "search-bar-header-options-button">List</button>
                </div>
            </div>
               {pageOption === "Top" && <SearchPageContentTop SearchedUser={SearchedUser}SearchedPost={SearchedPost}handlePostClick={handlePostClick} setPageOption={setPageOption}/>}
               {pageOption === "People" && <SearchPageContentPeople SearchedUser={SearchedUser}/>}
                
        </div>
    )

}

function SearchPageContentTop({SearchedUser, SearchedPost, handlePostClick, setPageOption}) {
    return (
        <div>
            <div className="search-page-user-list">
                {SearchedUser?.slice(0,3).map((user) => {
                    return <SmallUserProfile user={user}/>})
                }
                <button className = "search-page-user-list-show-all" onClick = { () => setPageOption("People")}>View All</button>
            </div>
            <div className="search-page-tweets">
                {SearchedPost?.map((post) => {
                    return <PostBox post = {post} user={post.postBy} handlePostClick={handlePostClick} />
                })}

            </div>
        </div>
    )
}


function SearchPageContentPeople({SearchedUser}) {
    return (
        <div>
            <div className="search-page-user-list">
                {SearchedUser?.map((user) => {
                    return <SmallUserProfile user={user}/>})
                }
            </div>
        </div>
    )
}
export { SearchPage }