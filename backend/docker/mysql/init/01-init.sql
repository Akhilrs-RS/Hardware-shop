-- H-Shop MySQL Database Initialization
CREATE DATABASE IF NOT EXISTS `hshop_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `hshop_db`;

-- Grant permissions to hshop_user
GRANT ALL PRIVILEGES ON `hshop_db`.* TO 'hshop_user'@'%';
FLUSH PRIVILEGES;
