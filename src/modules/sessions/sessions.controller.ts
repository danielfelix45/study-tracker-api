import { Request, Response } from "express";
import { createSessionService } from "./sessions.service";

export async function createSession(req: Request, res: Response) {
  const { courseId, duration, date } = req.body;
  const userId = req.user!.userId;

  const session = await createSessionService(
    userId,
    courseId,
    duration,
    date
  );

  return res.status(201).json(session);
}