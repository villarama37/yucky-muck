CREATE SCHEMA `starter-kit` ;
CREATE USER 'starter-kit'@'localhost';
/* 
Deployed versions should not assign a password to the starter kit user
They should assign no password and use IAM authentication instead 
*/

GRANT ALL PRIVILEGES ON `starter-kit`.* TO 'starter-kit'@'localhost';
GRANT ALL PRIVILEGES ON `starter-kit`.* TO 'starter-kit'@'%' WITH GRANT OPTION;
