/*
CS 262 
Lab 08
Young In Kim 
*/
-- a
-- SELECT *
-- FROM Game
-- ORDER BY time DESC;

-- b
-- SELECT *
-- FROM Game
-- WHERE time > CURRENT_DATE - 7

-- c
-- SELECT * 
-- FROM Player 
-- WHERE name IS NOT NULL;

-- d
-- SELECT *
-- FROM PlayerGame
-- WHERE score > 2000;

-- e
-- SELECT *
-- FROM Player
-- WHERE emailAddress LIKE '%@gmail.com%';

-- Multiple table Queris in Postgre sql 

-- a 
-- SELECT PlayerGame.score 
-- FROM Player, PlayerGame
-- Where Player.ID = PlayerGame.playerID
-- And Player.name = 'The King'
-- ORDER BY PlayerGame.score DESC; 

-- b 
-- SELECT Player.name
-- FROM PlayerGame, Player, Game
-- WHERE Game.time = '2006-06-28 13:20:00'
-- AND PlayerGame.gameID = Game.ID
-- AND PlayerGame.playerID = Player.ID
-- ORDER BY PlayerGame.score DESC LIMIT 1; 

-- c 
-- 
-- We are checking to see if player 1 and 2 in the last query will return the player with lower id. 

-- d
-- There are quite a few times we should use a self join however, generally it is used when 
-- the data needs to reference the data in its own table. An example will be a child-parent relationship in a table