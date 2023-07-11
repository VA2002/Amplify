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
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'TestA','TestA','2020-10-10','M',''),(2,'TestB','newpassword','2022-11-11','F','TestCountry'),(6,'ABC','123','2021-12-01','F','BE'),(9,'XYZ','321','2019-08-01','M','TD'),(10,'NewAccount','1','2022-12-01','M','CA'),(11,'VA2002','VisheshArora2002','2002-09-28','M','IN'),(12,'SongLover','Music','2001-09-13','F','GE'),(14,'Account','Secret','2010-04-04','RNS','YT'),(15,'LeIndie','Indie','2003-12-03','M','JE'),(16,'Harry Potter','Imawizard','1980-07-31','M','GB'),(17,'Name','Secret','2000-01-04','M','UM'),(18,'MrAmplify','Amplify','2022-02-13','M','NZ'),(19,'Voldemort','Horcrux','1926-12-31','M','GB'),(20,'Testing','Testing','2002-12-03','M','RO'),(21,'Tester','Tester','2001-12-04','F','PL'),(22,'Tester','Tester','2001-12-04','F','PL'),(23,'Yahoo','Lol','2023-12-01','M','IN'),(24,'Yahoo','Lol','2023-12-01','M','IN'),(25,'Yahoo','Lol','2023-12-01','M','IN'),(26,'qe4yq5y','qw','2004-11-23','M','DE'),(27,'JohnCena','cantsee','1972-04-23','M','US'),(28,'Friend','Buddy','2001-12-04','F','PL'),(29,'Friend','Buddy','2001-12-04','F','PL'),(30,'Friend','Buddy','2001-12-04','F','PL');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
