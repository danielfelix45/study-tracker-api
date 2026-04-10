import bcrypt from "bcrypt";
import { connection as db } from "../../database/connection";

export class UserService {
  async create(data: any) {
    const { name, email, password } = data;

    // Verificar se já existe usuário
    const [existing] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if ((existing as any[]).length > 0) {
      throw new Error("User already exists");
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return {
      id: (result as any).insertId,
      name,
      email,
    };
  }
}