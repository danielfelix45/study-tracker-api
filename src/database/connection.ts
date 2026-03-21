import {createPool, Pool} from "mysql2/promise";

export const connection: Pool = createPool({
   host: "localhost",
   user: "root",
   password: "Dafelix45.",
   database: "study_tracker",
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
});