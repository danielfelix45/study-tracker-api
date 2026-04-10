import {Router} from "express";
import coursesRouter from "./courses.routes";
import userRoutes from "../modules/users/user.routes";
import authRoutes from "../modules/auth/auth.routes";

const router = Router();

router.use(coursesRouter);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.get('/', (req, res) => {
    res.json({
        name: "Study Tracker API",
        version: "1.0.0",
        status: "running"
    });
});

export default router;