CREATE DATABASE  IF NOT EXISTS `ZemosoDiagnostics` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ZemosoDiagnostics`;

DROP TABLE IF EXISTS `lab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab` (
  `lab_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `test_name` varchar(100) NOT NULL,
  `rating` double NOT NULL,
  `slots_available` int NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`lab_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;