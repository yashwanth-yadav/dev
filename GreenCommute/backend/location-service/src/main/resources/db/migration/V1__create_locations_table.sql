CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `aqi_index` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;