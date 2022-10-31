CREATE DATABASE  IF NOT EXISTS `ZemosoDiagnostics` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ZemosoDiagnostics`;

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(45) NOT NULL,
  `area` varchar(100) NOT NULL,
  `zip_code` int NOT NULL,
  `city` varchar(100) NOT NULL,
  `house_no` varchar(45) NOT NULL,
  PRIMARY KEY (`address_id`),
  UNIQUE KEY `address_id_UNIQUE` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;