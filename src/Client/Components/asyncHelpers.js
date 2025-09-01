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