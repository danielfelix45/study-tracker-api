import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // Verifica se tem token
  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  // Formato: Bearer TOKEN
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token!, process.env.JWT_SECRET!);

    // salva dados do usuário na requisição
    req.user = decoded as any;

    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};