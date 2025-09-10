CREATE TABLE users ( -- users
    userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- internal id
    objectTag VARCHAR(1), -- u for users
    username VARCHAR(50) NOT NULL UNIQUE, -- username ie Nelson Chan
    displayName VARCHAR(75) NOT NULL, -- Cringebot666
    pass VARCHAR(255) NOT NULL, -- hashed password for user
    bio TEXT, -- bio
    numFollower INT DEFAULT 0, -- number of followers
    numFollowing INT DEFAULT 0, -- number user is following
    avatar VARCHAR(255) DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    joined DATETIME DEFAULT CURRENT_TIMESTAMP, -- date joined
    birthDate DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follows( -- follows
    followerID INT NOT NULL, -- userID
    followingID INT NOT NULL, -- person userID is following
    PRIMARY KEY (followerID, followingID), -- followerID follows followingID
    FOREIGN KEY (followerID) REFERENCES users(userID),
    FOREIGN KEY (followingID) REFERENCES users(userID)
);