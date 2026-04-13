import { Router } from "express";
import { createSession } from "./sessions.controller";
import { authMiddleware } from "../auth/auth.middleware";
import { createSessionSchema } from "../../schemas/sessions.schema";
import { validate } from "../../middlewares/validate.middleware";

const router = Router();

router.post("/", authMiddleware, validate(createSessionSchema), createSession);

export default router;
