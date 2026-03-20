import {Router} from "express";
import coursesRouter from "./courses.routes";

const router = Router();

router.use(coursesRouter);

router.get('/', (req, res) => {
    res.send("<h1>API Study Tracker rodando 🚀</h1>")
})

export default router;