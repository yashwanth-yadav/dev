



CREATE TABLE `job` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int DEFAULT NULL,
  `is_saved` tinyint DEFAULT NULL,
  `job_role` varchar(45) DEFAULT NULL,
  `distance` int DEFAULT NULL,
  `is_active` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `companyId_UNIQUE` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

