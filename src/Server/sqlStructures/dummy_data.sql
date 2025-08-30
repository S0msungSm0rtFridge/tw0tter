INSERT INTO users (username, objectTag, displayName, bio, avatar) VALUES
('elonmusk', 'u', 'Elon Musk', 'Mars, Cars, Chips, Starships. Tweets are my own.', 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'),
('catlady13', 'u', 'Cat Lady', 'All things cats. Cat memes, cat facts, cat pics.', 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'),
('historybuff', 'u', 'History Buff', 'History is written by the victors.', 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png');

INSERT INTO follows (followerID, followingID) VALUES
(1, 2), -- elonmusk follows catlady13
(2, 1), -- catlady13 follows elonmusk
(2, 3), -- catlady13 follows historybuff
(3, 1); -- historybuff follows elonmusk

INSERT INTO communities (`name`, objectTag, `description`) VALUES
('Space Enthusiasts', 'c', 'All about rockets, planets, and the universe.'),
('Cat Lovers', 'c', 'Share your best cat moments!');

INSERT INTO members (memberID, communityID) VALUES
(1, 1), -- elonmusk in Space Enthusiasts
(3, 1), -- historybuff in Space Enthusiasts
(2, 2); -- catlady13 in Cat Lovers

INSERT INTO posts (objectTag, postBy, communityID, content) VALUES
('p', 1, 1, 'Just launched another rocket! 🚀'),
('p', 2, 2, 'My cat just knocked over my coffee. Again.'),
('p', 3, 1, 'Did you know the Roman Empire lasted over 1,000 years?');

INSERT INTO retweets (userID, postID) VALUES
(2, 1), -- catlady13 retweets elonmusk's post
(3, 3); -- historybuff retweets their own post

INSERT INTO post_likes (userID, postID) VALUES
(2, 1), -- catlady13 likes elonmusk's post
(1, 2), -- elonmusk likes catlady13's post
(3, 3); -- historybuff likes their own post

INSERT INTO replies (objectTag, content, commentBy) VALUES
('r', 'Congrats! When is Mars?', 3),
('r', 'Amazing! 🚀', 2),
('r', 'Classic cat move!', 3);

-- Link replies to posts
INSERT INTO reply_post (replyID, postID) VALUES
(1, 1), -- reply 1 to post 1
(2, 1), -- reply 2 to post 1
(3, 2); -- reply 3 to post 2

-- Example: reply to a reply (threaded comment)
INSERT INTO replies (objectTag, content, commentBy) VALUES
('r', 'I want to believe.', 2);

INSERT INTO reply_comment (replyID, parentReplyID) VALUES
(4, 1); -- reply 4 is a reply to reply 1

-- Likes for replies
INSERT INTO reply_likes (userID, replyID) VALUES
(1, 1), -- elonmusk likes reply 1
(2, 3); -- catlady13 likes reply 3