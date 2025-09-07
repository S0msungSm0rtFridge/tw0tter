CREATE TABLE posts ( -- posts
    postID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- internal id
    objectTag VARCHAR(1) NOT NULL,  -- p for posts
    numLikes INT DEFAULT 0, -- number of likes
    numRetweet INT DEFAULT 0, -- number of retweets
    numReplies INT DEFAULT 0, -- number of replies
    postBy INT NOT NULL, -- id of the user that posted the post
    parentPost INT DEFAULT NULL, -- if the post is a reply of another post, id of that post is here
    communityID INT NOT NULL, -- community post is tied to
    content TEXT, -- content
    postDate DATETIME DEFAULT CURRENT_TIMESTAMP, -- time
    views INT DEFAULT 0, -- number of views
    FOREIGN KEY (postBy) REFERENCES users(userID), -- checker
    FOREIGN KEY (communityID) REFERENCES communities(communityID), -- checker
    FOREIGN KEY (parentPost) REFERENCES posts(postID) -- checker
);

CREATE TABLE retweets (
    userID INT NOT NULL, -- userID
    postID INT NOT NULL, -- postID
    PRIMARY KEY (userID, postID), -- key is a pair of userID and postID
    FOREIGN KEY (userID) REFERENCES users(userID), -- checker
    FOREIGN KEY (postID) REFERENCES posts(postID) -- checker
);

CREATE TABLE post_likes (  -- post and who likes
    userID INT NOT NULL, -- userID
    postID INT NOT NULL, -- postID
    PRIMARY KEY (userID, postID), -- pair of userID and postID
    FOREIGN KEY (userID) REFERENCES users(userID), -- checker
    FOREIGN KEY (postID) REFERENCES posts(postID) -- checker
); 


