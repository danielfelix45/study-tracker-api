import {Router} from "express";

const router = Router();

const courses = [
  { "id": 1, "title": "Node.js" },
  { "id": 2, "title": "TypeScript" }
]

router.get('/courses', (req, res) => {
    res.json(courses);
})

export default router;