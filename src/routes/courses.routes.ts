import {Router} from "express";
import * as coursesController from "../controllers/courses.controller";


const router = Router();

router.get('/courses', coursesController.getCourses);

router.get('/courses/:id', coursesController.getCourseById);

router.post('/courses', coursesController.createCourse);

router.put('/courses/:id', coursesController.updateCourse);

router.delete('/courses/:id', coursesController.deleteCourse);


export default router;