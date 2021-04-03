// Here we will contain logic to communicate with the PostgreSQL database
const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_PORT,
    schema: process.env.PG_SCHEMA
});

module.exports = pool;
