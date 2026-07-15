const mysql = require('mysql2/promise');
const { MYSQL_DB_HOST, MYSQL_DB_PORT, MYSQL_DB_USER, MYSQL_DB_PASSWORD, MYSQL_DB_DATABASE } = require('./utils/config');
const fs = require('fs');
const path = require('path');

const pool = mysql.createPool({
    host: MYSQL_DB_HOST,
    port: Number(MYSQL_DB_PORT),
    user: MYSQL_DB_USER,
    password: MYSQL_DB_PASSWORD,
    database: MYSQL_DB_DATABASE,

    ssl: {
        ca: fs.readFileSync(path.join(__dirname, 'ca.pem'))
    },

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;