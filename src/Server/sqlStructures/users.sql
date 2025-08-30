CREATE TABLE users (
    userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1), 
    username VARCHAR(50) NOT NULL UNIQUE,
    displayName VARCHAR(75) NOT NULL,
    bio TEXT,
    avatar VARCHAR(255) DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    joined DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follows(
    followerID INT NOT NULL,
    followingID INT NOT NULL,
    PRIMARY KEY (followerID, followingID), --followerID follows followingID
    FOREIGN KEY (followerID) REFERENCES users(userID),
    FOREIGN KEY (followingID) REFERENCES users(userID)
);