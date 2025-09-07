import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { getFollowers, getFollowing } from "../../asyncHelpers";

const FollowContext = createContext();

export function FollowProvider ( {children, userID} ){

    const [Followers, setFollowers] = useState(null);
    const [Following, setFollowing] = useState(null);

    useEffect(() => {
        try{
            const fetchData = async () => {
                const [followingRes, followersRes] = await Promise.all([
                    getFollowing(userID),
                    getFollowers(userID)
                ]);
                setFollowers(followersRes.data);
                setFollowing(followingRes.data);
            }
            if (userID) fetchData();
        } catch (err){
            console.log(err);
        }
    }, [userID]);

    const followUser = (newUser) => {
        setFollowing((prev) => [...prev, newUser]);
        axios.post('/api/users/follow', {followerID : userID, followingID : newUser.userID}).catch((err) => {
            console.error(err);
            // rollback
            setFollowing((prev) => prev.filter(u => u._id !== newUser._id)); 
        });

    }
    
    const unfollowUser = (removeUser) => {
        setFollowing((prev) => prev.filter(u => u.userID !== removeUser.userID));    
        axios.post('/api/users/unFollow', {followerID : userID, followingID : removeUser.userID}).catch((err) => {
            console.error(err);
            // rollback
            setFollowing((prev) => prev.filter(u => u._id !== removeUser._id)); 
        });
    }
      return (
        <FollowContext.Provider
        value={{
            Following,
            Followers,
            followUser,
            unfollowUser
        }}
        >
        {children}
        </FollowContext.Provider>
  );
}

export const useFollowData = () => useContext(FollowContext);
