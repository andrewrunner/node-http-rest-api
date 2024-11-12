import { Dialect, Sequelize } from "sequelize";


const database = process.env.DB_NAME || 'dvdrental';
const username = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASS || 'postgres';
const host = process.env?.DB_HOST || 'localhost';
const port = process.env?.DB_PORT || 5432;
const dialect = process.env?.DB_DIALECT || 'postgres'; 

export const sequelize = new Sequelize(database, username, password,  {
    host: host,
    port: +port,
    dialect: dialect as Dialect,
});  
