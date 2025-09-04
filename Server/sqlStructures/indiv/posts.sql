CREATE TABLE posts (
    postID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1) NOT NULL, 
    numLikes INT DEFAULT 0,
    numRetweet INT DEFAULT 0,
    numReplies INT DEFAULT 0,
    postBy INT NOT NULL,
    parentPost INT DEFAULT NULL,
    communityID INT NOT NULL,
    content TEXT,
    postDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    views INT DEFAULT 0,
    FOREIGN KEY (postBy) REFERENCES users(userID),
    FOREIGN KEY (communityID) REFERENCES communities(communityID),
    FOREIGN KEY (parentPost) REFERENCES posts(postID)
);

CREATE TABLE retweets (
    userID INT NOT NULL,
    postID INT NOT NULL,
    PRIMARY KEY (userID, postID),
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (postID) REFERENCES posts(postID)
);

CREATE TABLE post_likes (
    userID INT NOT NULL,
    postID INT NOT NULL,
    PRIMARY KEY (userID, postID),
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (postID) REFERENCES posts(postID)
);


