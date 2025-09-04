CREATE TABLE communities(  -- community
    communityID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- internal id for comunity 
    objectTag VARCHAR(1),  -- 'c' for communities 
    `name` VARCHAR(50) NOT NULL,   -- name of the community
    `description` TEXT,  -- description of the community (might be unneeded)
    numMember INT DEFAULT 0, -- number of members in the community
    created DATETIME DEFAULT CURRENT_TIMESTAMP -- date when community is created
);

CREATE TABLE members(
    memberID INT NOT NULL, -- memberID
    communityID INT NOT NULL, -- communityID
    PRIMARY KEY (memberID, communityID), -- key is pair of memberID and communityID
    FOREIGN KEY (memberID) REFERENCES users(userID), -- checker
    FOREIGN KEY (communityID) REFERENCES communities(communityID) -- checker
);