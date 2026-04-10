import { Router } from "express";
import { UserController } from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";

const router = Router();
const controller = new UserController();

router.post("/", validate(createUserSchema), controller.create);

export default router;