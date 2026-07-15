require('dotenv').config();

const MYSQL_DB_HOST = process.env.MYSQL_DB_HOST;
const MYSQL_DB_USER = process.env.MYSQL_DB_USER;
const MYSQL_DB_PASSWORD = process.env.MYSQL_DB_PASSWORD;
const MYSQL_DB_DATABASE = process.env.MYSQL_DB_DATABASE;
const MYSQL_DB_PORT = process.env.MYSQL_DB_PORT;

module.exports = {
    MYSQL_DB_HOST,
    MYSQL_DB_USER,
    MYSQL_DB_PASSWORD,
    MYSQL_DB_DATABASE,
    MYSQL_DB_PORT
}