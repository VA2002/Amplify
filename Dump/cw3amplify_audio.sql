CREATE DATABASE  IF NOT EXISTS `cw3amplify` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cw3amplify`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cw3amplify
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `audio`
--

LOCK TABLES `audio` WRITE;
/*!40000 ALTER TABLE `audio` DISABLE KEYS */;
INSERT INTO `audio` VALUES (1,'Chill',1,'Sakura Hz','Soundtrack','','Chill.mp3','PG'),(3,'Die For You',1,'The Weeknd','Pop','https://upload.wikimedia.org/wikipedia/en/8/81/The_Weeknd_-_Die_for_You.png','The Weeknd - Die For You.mp3','PG13'),(5,'Unstoppable',11,'The Score','Altrock','https://i.pinimg.com/236x/5c/67/55/5c6755f91e463e93e13f2b1fc38d1d70.jpg','The Score - Unstoppable .mp3','PG'),(8,'In The End',2,'Linkin Park','Heavymetal','https://m.media-amazon.com/images/M/MV5BNzc1MjBiM2QtNTcxNS00YWQ2LTgwMDktOGYxMTU5M2Q4ZjBhXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg','Linkin Park- In the End.mp3','PG13'),(14,'Glory',2,'The Score','Altrock','https://i.ytimg.com/vi/i3ucSSVJTL4/maxresdefault.jpg','The Score- Glory.mp3','PG'),(15,'Less Than Zero',2,'The Weeknd','Pop','https://i1.sndcdn.com/artworks-YBpQpISVE7yr-0-t500x500.jpg','The Weeknd - Less Than Zero.mp3','PG13'),(16,'Renegade',17,'Axwell / Ingrosso','Indie','https://weraveyou.com/wp-content/uploads/2022/03/Axwell-Ingrosso-press.jpeg','Renegade.mp3','PG'),(17,'Blow Me Away',17,'Breaking Benjamin','Heavymetal','https://upload.wikimedia.org/wikipedia/en/5/56/BlowMeAway.jpg','Breaking Benjamin - Blow Me Away .mp3','PG13'),(18,'Line in the Sand',17,'Motorhead','Heavymetal','https://i1.sndcdn.com/artworks-b3hD8dZRyuAz20Y7-nmYmvQ-t500x500.jpg','Line in the Sand.mp3','PG13'),(19,'Im Born to Run',17,'American Authors','Altrock','https://i1.sndcdn.com/artworks-86BazGp1WGUu-0-t500x500.jpg','American Authors - Im Born To Run .mp3','PG'),(20,'The Way You Make Me Feel',12,'Micheal Jackson','Pop','https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d','The Way You Make Me Feel.mp3','R'),(21,'Mettalingus',11,'Alter Bridge','Heavymetal','https://i.scdn.co/image/ab67616d0000b273bc7ddb77993dd1d8d19c22a2','Mettalingus.mp3','PG13'),(23,'Birds',19,'Imagine Dragons ft Elisa','Indie','https://m.media-amazon.com/images/M/MV5BZGZmNjFlNjMtYWJmNS00MDQ4LWE4NjgtMWFjMzczNzA2MDA2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg','Imagine Dragons - Birds ft. Elisa.mp3','PG'),(24,'I Bet My Life',19,'Imagine Dragons','Altrock','https://m.media-amazon.com/images/M/MV5BNjdmY2M4NTAtZTk1Ny00ODhhLTgzMDMtZTY5MDYyMTdkYjYxXkEyXkFqcGdeQXVyNjI1NDcyNDM@._V1_.jpg','Imagine Dragons - I Bet My Life.mp3','PG'),(25,'Legendary',19,'Welshley Arms','Altrock','https://upload.wikimedia.org/wikipedia/en/b/b7/Welshly_Arms_-_Legendary.jpg','Legendary.mp3','PG'),(26,'Not Afraid',19,'Eminem','Rap','https://i1.sndcdn.com/artworks-000085270391-8z5r34-t500x500.jpg','Eminem - Not Afraid.mp3','Expl'),(27,'Old Town Road',11,'Lil Nas X','Rap','https://i1.sndcdn.com/artworks-tZzu0fw0lo8KzsfQ-l7yCMQ-t500x500.jpg','Lil Nas X - Old Town Road.mp3','R'),(28,'Friends Theme',11,'The Rembrandts','Altrock','https://images.indianexpress.com/2021/05/friends-the-reunion-1200-2.jpg','Friends.mp3','PG'),(29,'Blinding Lights',11,'The Weeknd','Pop','https://www.rollingstone.com/wp-content/uploads/2019/11/8mT0FsOQ.jpg','The Weeknd- Blinding Lights.mp3','PG'),(30,'Wolves',11,'Selena Gomez ft Marshmellow','Pop','https://i1.sndcdn.com/artworks-000259851035-apr68w-t500x500.jpg','Selena Gomez, Marshmello - Wolves.mp3','PG');
/*!40000 ALTER TABLE `audio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-14  9:54:58
