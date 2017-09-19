

CREATE DATABASE IF NOT EXISTS chat;

USE chat;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS `Messages`;
    
CREATE TABLE `Messages` (
  `id` INTEGER AUTO_INCREMENT,
  `body` VARCHAR(150),
  `user` INTEGER,
  `postdate` DATETIME,
  `room` VARCHAR(20),
  PRIMARY KEY (`id`)
  -- FOREIGN KEY (`user`) REFERENCES `Users` (`id`)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(30),
  `age` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (user) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`body`,`user`,`postdate`,`room`) VALUES
-- ('','','','','');
-- INSERT INTO `Users` (`id`,`name`,`age`) VALUES
-- ('','','');