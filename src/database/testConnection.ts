import { connection } from "./connection";

async function test() {
   const [rows] = await (connection as any).query("SELECT 1");
   console.log(rows);
}

test();