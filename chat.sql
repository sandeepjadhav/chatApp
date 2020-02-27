-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user_id` int(11) DEFAULT NULL,
  `to_user_id` int(11) DEFAULT NULL,
  `message` varchar(45) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,2,7,'Hi','2020-02-20 17:59:24'),(2,7,2,'Hi Ajeet','2020-02-20 17:59:45'),(3,2,7,'How are you','2020-02-20 17:59:56'),(4,7,2,'Im Good How About you','2020-02-20 18:00:09'),(5,2,7,'Im going Native todya','2020-02-20 18:00:42'),(6,7,2,'Coming tomarrow','2020-02-20 18:00:51'),(7,2,7,'Ok','2020-02-20 18:01:00'),(8,7,7,'Hey','2020-02-20 18:01:46'),(9,2,2,'Hooo','2020-02-20 18:02:00'),(10,2,2,'How are you','2020-02-20 18:02:05'),(11,7,7,'Im Good','2020-02-20 18:02:12'),(12,7,7,'Im Goodfgfd','2020-02-20 18:02:22'),(13,7,7,'Im Goodfgfddfg','2020-02-20 18:02:23'),(14,2,2,'Well','2020-02-20 18:02:30'),(15,2,7,'Hey Admin','2020-02-20 18:03:07'),(16,2,7,'How are you','2020-02-20 18:03:13'),(17,7,2,'Hey im good','2020-02-20 18:03:23'),(18,7,2,'COll','2020-02-20 18:03:26'),(19,2,7,'Hey Amin','2020-02-20 18:03:43'),(20,2,7,'Hey Amin 3','2020-02-20 18:04:53'),(21,2,7,'Hey Amin 3','2020-02-20 18:06:07'),(22,2,7,'Wewe','2020-02-20 18:06:16'),(23,2,7,'Heeee','2020-02-20 18:06:52'),(24,2,7,'Heeeerrrrr','2020-02-20 18:07:03'),(25,7,2,'Ajeettttt','2020-02-20 18:07:21'),(26,2,7,'Ya tell me','2020-02-20 18:07:27'),(27,7,2,'heyyyyyyyyy','2020-02-20 18:08:20'),(28,2,7,'Tell me','2020-02-20 18:08:38'),(29,2,7,'Tell me 2','2020-02-20 18:15:37'),(30,2,7,'Tell me 223','2020-02-20 18:16:06'),(31,2,7,'Test Me too','2020-02-20 18:16:56'),(32,7,2,'Ok Testing','2020-02-20 18:17:12'),(33,2,7,'Yes','2020-02-20 18:17:21'),(34,2,7,'Hey','2020-02-20 18:20:01'),(35,7,2,'Hoo','2020-02-20 18:20:07'),(36,2,7,'Hey','2020-02-20 18:20:18'),(37,2,7,'HOwdy','2020-02-20 18:34:53'),(38,2,7,'HOwdy','2020-02-20 18:34:55'),(39,2,7,'Howdy','2020-02-20 18:35:06'),(40,2,7,'Howdyssss','2020-02-20 18:35:23'),(41,7,2,'Hi','2020-02-20 18:35:35'),(42,2,7,'Hey','2020-02-20 18:37:25'),(43,2,7,'Hey2','2020-02-20 18:37:44'),(44,7,2,'Hiiiii','2020-02-20 18:38:15'),(45,2,7,'Hi','2020-02-20 18:38:56'),(46,7,2,'Hey','2020-02-20 18:39:09'),(47,2,7,'Hi','2020-02-20 18:39:15'),(48,2,7,'Hi','2020-02-20 18:39:22'),(49,2,7,'Hi','2020-02-20 18:39:23'),(50,2,7,'Hi','2020-02-20 18:40:11'),(51,2,7,'Hey','2020-02-20 18:41:18'),(52,7,2,'Ajeet','2020-02-20 18:41:25'),(53,2,7,'Hey rtrtr','2020-02-20 18:41:31'),(54,2,7,'Hey rtrtr 334','2020-02-20 18:41:39'),(55,2,7,'Heys','2020-02-20 18:45:02'),(56,7,2,'Heysasa','2020-02-20 18:45:13'),(57,2,7,'fsad','2020-02-20 18:46:46'),(58,2,7,'43432434','2020-02-20 18:48:02'),(59,2,7,'43432434mmmm','2020-02-20 18:50:33'),(60,7,2,'klkjl','2020-02-20 18:50:45'),(61,2,7,'XXXXXXXX','2020-02-20 18:51:06'),(62,7,2,'c','2020-02-20 18:51:15'),(63,2,7,'Asasa','2020-02-20 18:53:00'),(64,7,2,'sdfsd','2020-02-20 18:53:15'),(65,2,7,'Hey','2020-02-20 18:53:49'),(66,7,2,'YYYYYYYYY','2020-02-20 18:54:04'),(67,2,7,'Hey','2020-02-20 18:55:14'),(68,2,7,'Hey','2020-02-20 18:55:15'),(69,7,2,'sdas','2020-02-20 18:55:27'),(70,1,2,'Hey Ajeet','2020-02-20 18:56:16'),(71,2,1,'Hey','2020-02-20 18:56:26'),(72,2,1,'How are you','2020-02-20 18:56:39'),(73,1,2,'FIne','2020-02-20 18:56:45'),(74,1,2,'Hi Ajeet','2020-02-20 19:05:40'),(75,2,1,'Hi','2020-02-20 19:05:44'),(76,2,1,'How are u','2020-02-20 19:05:53'),(77,1,2,'Fine brow','2020-02-20 19:06:02'),(78,1,2,'Hi','2020-02-20 19:07:05'),(79,1,2,'Hi','2020-02-20 19:07:50'),(80,1,2,'Hi','2020-02-20 19:07:51'),(81,1,2,'Hi','2020-02-20 19:08:36'),(82,2,1,'oooooooo','2020-02-20 19:08:44'),(83,2,1,'ccccc','2020-02-20 19:08:48'),(84,2,1,'Hey Sandeep','2020-02-20 19:18:11'),(85,2,1,'Hey Sandeeps','2020-02-20 19:19:29'),(86,1,2,'Hisdsds','2020-02-20 19:19:36'),(87,1,2,'Hi','2020-02-23 17:46:16'),(88,2,1,'Hi Ajeet','2020-02-23 17:46:32'),(89,2,1,'How are u','2020-02-23 17:46:39'),(90,1,2,'Fine','2020-02-23 17:46:45'),(91,2,1,'hi','2020-02-23 17:47:31');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `socket_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Sandeep','Jadhav','sandeep@gmail.com','sandeep','sandeep',1,'8n1gCvhj_jtdijL1AAAE'),(2,'ajeet','ajeet','ajeet@gmail.com','ajeet','ajeet',1,'LFEq1RARr13KEyveAAAJ'),(3,'Ervin','Howell','Howell@gmail.com','Howell','Howell',NULL,NULL),(4,'Clementine','Bauch','Clementine@gmail.com','Clementine','Clementine',NULL,NULL),(5,'Patricia','Lebsack','Patricia@gmail.com','Patricia','Patricia',NULL,NULL),(6,'Chelsey','Dietrich','Chelsey@gmail.com','Chelsey','Chelsey',NULL,NULL),(7,'Admin','Admin','admin@gmail.com','admin','admin',1,NULL);
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

-- Dump completed on 2020-02-27 19:30:03
