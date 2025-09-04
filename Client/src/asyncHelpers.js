import axios from "axios";

async function getUsers() { //get all users
    try {
        const resp = await axios.get("/api/users");
        return resp.data;
    }
    catch (error) {
        console.error("Failed at fetching all users", error);
        throw error;
    }
}

async function getFollowers(userID){ //get followers of user
    try {
        const resp = await axios.get(`/api/users/getFollowers/${userID}`);
        return resp.data;
    }
    catch (error){
        console.error("Failed to fetch follows of specified user", error);
        throw error;
    }
}

async function getFollowing(userID){ //get the people the user follows
    try {
        const resp = await axios.get(`/api/users/getFollowing/${userID}`, );
        return resp.data;
    }
    catch (error){
        console.error("Failed to fetch who a user is following", error);
        throw error;
    }
}

async function getUserByID(userID){ //get a specific user via id
    try{
        console.log("running");
        const resp = await axios.get(`/api/users/getUser/${userID}`);
        return resp.data;
    }  
    catch (error){
        console.error("Failed to grab one post", error);
        throw error;
    }
}

async function getCommunities() { //get all communities
    try {
        const resp = await axios.get("/api/communities");
        return resp.data;
    }
    catch (error){
        console.error("Failed at fetching all communities", error);
        throw error;
    }
}

async function getMembers(communityID){ //get all members of a community
    try {
        const resp = await axios.get(`/api/communities/getMembers/${communityID}`);
        return resp.data;
    }
    catch (error){
        console.error("Failed to fetch members", error);
        throw error;
    }
}

async function getPosts(){ //get all posts
    try {
        const resp = await axios.get("/api/posts");
        console.log("after");
        console.log(resp.data);
        return resp.data;
    }
    catch (error){
        console.error("Failed at fetching all posts", error);
        throw error;
    }
}

async function getChildrenPosts(postID){
    try{
        const resp = await axios.get(`/api/posts/getChild/${postID}`);
        console.log("response");
        console.log(resp.data);
        return resp.data;
    }  
    catch (error){
        console.error("Failed at getting children posts of a post");
        throw error;
    }
}

async function getPostByID(postID){ //get a post by its ID
    try {
        const resp = await axios.get(`/api/posts/getPost/${postID}`);
        console.log(resp.data);
        return resp.data;
    }
    catch (error){
        console.error("Failed at grabbing one post", error);
        throw error;
    }
}

async function getWhoLikePost(postID){ //get the users who liked a post
    try {
        const resp = await axios.get(`/api/posts/getWhoLike/${postID}`);
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting all people that liked a post", error);
        throw error;
    }
}

async function getWhoRetweet(postID){ //get the users who retweeted a post
    try {
        const resp = await axios.get(`/api/posts/getWhoRetweet/${postID}`);
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting all people that retweeted a post", error);
        throw error;
    }
}

async function getNumLikePost(postID){ //No need anymore. Delete if you want
    try {
        const resp = await axios.get(`/api/posts/getNumLike/${postID}`);
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting number of likes", error);
        throw error;
    }
}

async function getNumRetweet(postID){ //No need anymore, delete if you want
    try {
        const resp = await axios.get(`/api/posts/getNumRetweet/${postID}`);
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting number of retweets", error);
        throw error;
    }
}

export { getUsers, getCommunities, getUserByID, getChildrenPosts, getPosts, getPostByID, getFollowers, getFollowing, getMembers, getWhoLikePost, getNumLikePost, getWhoRetweet, getNumRetweet};