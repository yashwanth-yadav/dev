


CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(200) DEFAULT NULL,
  `logo` varchar(1000) DEFAULT NULL,
  `location_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
