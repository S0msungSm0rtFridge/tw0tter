CREATE TABLE posts (
    postID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1) NOT NULL, 
    postBy INT NOT NULL,
    communityID INT NOT NULL,
    content TEXT,
    postDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (postBy) REFERENCES users(userID),
    FOREIGN KEY (communityID) REFERENCES communities(communityID)
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


