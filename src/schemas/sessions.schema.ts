import { z } from "zod";

export const createSessionSchema = z.object({
  courseId: z.number(),
  duration: z.number().min(1, "Duration must be at least 1 minute"),
  date: z.string(),
});
