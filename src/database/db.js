import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();

const pool = createPool({
    host: process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    port: process.env.MYSQLPORT,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQLDATABASE

});

export default pool;
