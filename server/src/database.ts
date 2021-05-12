import { Pool } from "pg";

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '5492',
    database: 'project1',
    port: 5432
})