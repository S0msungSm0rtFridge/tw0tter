import axios from "axios";

async function getUsers() {
    try {
        const resp = await axios.get("api/users");
        return resp.data;
    }
    catch (error) {
        console.error("Failed at fetching all users", error);
        throw error;
    }
}

async function getFollowers(userID){
    try {
        const resp = axios.get('api/users/getFollowers', {userID});
        return resp.data;
    }
    catch (error){
        console.error("Failed to fetch follows of specified user", error);
        throw error;
    }
}

async function getFollowing(userID){
    try {
        const resp = axios.get('api/users/getFollowing', {userID});
        return resp.data;
    }
    catch (error){
        console.error("Failed to fetch who a user is following", error);
        throw error;
    }
}

async function getCommunities() {
    try {
        const resp = await axios.get("api/communities");
        return resp.data;
    }
    catch (error){
        console.error("Failed at fetching all communities", error);
        throw error;
    }
}

async function getMembers(communityID){
    try {
        const resp = axios.get('api/communities/getMembers', {communityID});
        return resp.data;
    }
    catch (error){
        console.error("Failed to fetch members", error);
        throw error;
    }
}

async function getPosts(){
    try {
        const resp = await axios.get("api/posts");
        return resp.data;
    }
    catch (error){
        console.error("Failed at fetching all posts", error);
        throw error;
    }
}

async function getWhoLikePost(postID){
    try {
        const resp = await axios.get("api/posts/getWhoLike", {postID});
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting all people that liked a post", error);
        throw error;
    }
}

async function getWhoRetweet(postID){
    try {
        const resp = await axios.get("api/posts/getWhoRetweet", {postID});
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting all people that retweeted a post", error);
        throw error;
    }
}

async function getNumLikePost(postID){
    try {
        const resp = await axios.get("api/posts/getNumLike", {postID});
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting number of likes", error);
        throw error;
    }
}

async function getNumRetweet(postID){
    try {
        const resp = await axios.get("api/posts/getNumRetweet", {postID});
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting number of retweets", error);
        throw error;
    }
}

async function getReplies(){
    try {
        const resp = await axios.get("api/replies");
        return resp.data;
    }
    catch (error){
        console.error("Failed at fetching all replies", error);
        throw error;
    }
}

async function getWhoLikeReply(replyID){
    try {
        const resp = await axios.get("api/replies/getWhoLike", {replyID});
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting all people that liked a post", error);
        throw error;
    }
}

async function getNumLikeReply(replyID){
    try {
        const resp = await axios.get("api/replies/getNumLike", {replyID});
        return resp.data;
    }
    catch (error){
        console.error("Failed at getting all people that liked a post", error);
        throw error;
    }
}

export { getUsers, getCommunities, getPosts, getReplies, getFollowers, getFollowing, getMembers, getWhoLikePost, getWhoLikeReply, getNumLikePost, getNumLikeReply, getWhoRetweet, getNumRetweet};