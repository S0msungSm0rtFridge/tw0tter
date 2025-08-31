-- users
CREATE TABLE users (
    userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1), 
    username VARCHAR(50) NOT NULL UNIQUE,
    displayName VARCHAR(75) NOT NULL,
    bio TEXT,
    numFollower INT DEFAULT 0,
    numFollowing INT DEFAULT 0, 
    avatar VARCHAR(255) DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    joined DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follows(
    followerID INT NOT NULL,
    followingID INT NOT NULL,
    PRIMARY KEY (followerID, followingID), -- followerID follows followingID
    FOREIGN KEY (followerID) REFERENCES users(userID),
    FOREIGN KEY (followingID) REFERENCES users(userID)
);

-- communities
CREATE TABLE communities(
    communityID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1),
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT, 
    numMember INT DEFAULT 0,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE members(
    memberID INT NOT NULL,
    communityID INT NOT NULL,
    PRIMARY KEY (memberID, communityID),
    FOREIGN KEY (memberID) REFERENCES users(userID),
    FOREIGN KEY (communityID) REFERENCES communities(communityID)
);

-- posts

CREATE TABLE posts (
    postID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1) NOT NULL, 
    numLikes INT DEFAULT 0,
    numRetweet INT DEFAULT 0,
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

-- replies

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

-- dummy-data

INSERT INTO users (username, objectTag, displayName, bio, numFollower, numFollowing, avatar) VALUES
('elonmusk', 'u', 'Elon Musk', 'Mars, Cars, Chips, Starships. Tweets are my own.', 2, 1, 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'),
('catlady13', 'u', 'Cat Lady', 'All things cats. Cat memes, cat facts, cat pics.', 1, 2,'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'),
('historybuff', 'u', 'History Buff', 'History is written by the victors.', 1, 1,'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png');

INSERT INTO follows (followerID, followingID) VALUES
(1, 2), -- elonmusk follows catlady13
(2, 1), -- catlady13 follows elonmusk
(2, 3), -- catlady13 follows historybuff
(3, 1); -- historybuff follows elonmusk

INSERT INTO communities (`name`, objectTag, `description`, numMember) VALUES
('Space Enthusiasts', 'c', 'All about rockets, planets, and the universe.', 2),
('Cat Lovers', 'c', 'Share your best cat moments!', 1);

INSERT INTO members (memberID, communityID) VALUES
(1, 1), -- elonmusk in Space Enthusiasts
(3, 1), -- historybuff in Space Enthusiasts
(2, 2); -- catlady13 in Cat Lovers

INSERT INTO posts (objectTag, numLikes, numRetweet, postBy, communityID, content) VALUES
('p', 1, 1, 1, 1, 'Just launched another rocket! 🚀'),
('p', 1, 0, 2, 2, 'My cat just knocked over my coffee. Again.'),
('p', 1, 1, 3, 1, 'Did you know the Roman Empire lasted over 1,000 years?');

INSERT INTO retweets (userID, postID) VALUES
(2, 1), -- catlady13 retweets elonmusk's post
(3, 3); -- historybuff retweets their own post

INSERT INTO post_likes (userID, postID) VALUES
(2, 1), -- catlady13 likes elonmusk's post
(1, 2), -- elonmusk likes catlady13's post
(3, 3); -- historybuff likes their own post

INSERT INTO replies (objectTag, parentObjectTag, numLikes, content, commentBy) VALUES
('r', 'p', 1, 'Congrats! When is Mars?', 3),
('r', 'p', 0, 'Amazing! 🚀', 2),
('r', 'p', 1, 'Classic cat move!', 3);

-- Link replies to posts
INSERT INTO reply_post (replyID, postID) VALUES
(1, 1), -- reply 1 to post 1
(2, 1), -- reply 2 to post 1
(3, 2); -- reply 3 to post 2

-- Example: reply to a reply (threaded comment)
INSERT INTO replies (objectTag, parentObjectTag, numLikes, content, commentBy) VALUES
('r', 'r', 0, 'I want to believe.', 2);

INSERT INTO reply_comment (replyID, parentReplyID) VALUES
(4, 1); -- reply 4 is a reply to reply 1

-- Likes for replies
INSERT INTO reply_likes (userID, replyID) VALUES
(1, 1), -- elonmusk likes reply 1
(2, 3); -- catlady13 likes reply 3