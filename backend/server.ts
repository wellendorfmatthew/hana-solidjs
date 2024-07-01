import { Hono } from "hono";
import { neon } from "@neondatabase/serverless";

const app = new Hono();
const sql = neon(process.env.DATABASE_URL || "");

const createTables = async() => {
    const createUserTable = 
    `
    CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        phoneNumber INT UNIQUE NOT NULL,
        name VARCHAR(100),
        age INT,
        lowerAge INT,
        higherAge INT,
        location VARCHAR(100),
        nationality VARCHAR(50),
        ethnicity VARCHAR(50),
        genderIdentity VARCHAR(50),
        marriagePreference BOOLEAN,
        relationshipType VARCHAR(50),
        sexuality VARCHAR(50)
    )
    `;

    await sql(createUserTable);
    console.log("Table created");
}

createTables().catch(err => {
    console.log("Unable to create table: ", err);
})

app.get("/", c => c.text("Hono!"));
const rows = await sql`SELECT version()`;

console.log("Starting server");
console.log(rows[0].version);

export default app;