import { connection } from './connection';

async function dataInsert() {
    await ( connection as any).execute(
        "INSERT INTO courses (title) VALUES (?)",
        ["Node.js"]
    )
    console.log("Curso inserido!");
}

dataInsert();