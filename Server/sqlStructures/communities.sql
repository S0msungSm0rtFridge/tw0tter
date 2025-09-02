CREATE TABLE communities(
    communityID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    objectTag VARCHAR(1),
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT, 
    created DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE members(
    memberID INT NOT NULL,
    communityID INT NOT NULL,
    PRIMARY KEY (memberID, communityID),
    FOREIGN KEY (memberID) REFERENCES users(userID),
    FOREIGN KEY (communityID) REFERENCES communities(communityID)
);