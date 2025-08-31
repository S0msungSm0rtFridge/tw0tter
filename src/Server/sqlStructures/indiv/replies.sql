CREATE TABLE replies(
    replyID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1),
    parentObjectTag VARCHAR(1),
    numLikes INT DEFAULT 0,
    content VARCHAR(255),
    commentBy INT NOT NULL,
    commentDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (commentBy) REFERENCES users(userID)
);

CREATE TABLE reply_post (
    replyID INT NOT NULL,
    postID INT NOT NULL,
    PRIMARY KEY(replyID, postID), 
    FOREIGN KEY (replyID) REFERENCES replies(replyID),
    FOREIGN KEY (postID) REFERENCES posts(postID)
);

CREATE TABLE reply_comment (
    replyID INT NOT NULL,
    parentReplyID INT NOT NULL,
    PRIMARY KEY (replyID, parentReplyID),
    FOREIGN KEY (replyID) REFERENCES replies(replyID),
    FOREIGN KEY (parentReplyID) REFERENCES replies(replyID)
);


CREATE TABLE reply_likes (
    userID INT NOT NULL,
    replyID INT NOT NULL,
    PRIMARY KEY (userID, replyID),
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (replyID) REFERENCES replies(replyID)
);