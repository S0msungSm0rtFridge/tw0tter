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

-- dummy_data

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

INSERT INTO posts (objectTag, numLikes, numRetweet, numReplies, postBy, parentPost, communityID, content, views) VALUES
('p', 1, 1, 2, 1, NULL, 1, 'Just launched another rocket! 🚀', 5),
('p', 1, 0, 1, 2, NULL, 2, 'My cat just knocked over my coffee. Again.', 3),
('p', 1, 1, 0, 3, NULL, 1, 'Did you know the Roman Empire lasted over 1,000 years?', 10),
-- Replies to post 1 (Elon's rocket post)
('p', 0, 0, 0, 3, 1, 1, 'Congrats! When are we going to Mars? 🚀', 2),
('p', 1, 0, 0, 2, 1, 1, 'Amazing! The future is here!', 1),
-- Reply to post 2 (Cat coffee post)
('p', 0, 0, 0, 1, 2, 2, 'Classic cat move! 😸', 1);

INSERT INTO retweets (userID, postID) VALUES
(2, 1), -- catlady13 retweets elonmusk's post
(3, 3); -- historybuff retweets their own post

INSERT INTO post_likes (userID, postID) VALUES
(2, 1), -- catlady13 likes elonmusk's post
(1, 2), -- elonmusk likes catlady13's post
(3, 3); -- historybuff likes their own post


