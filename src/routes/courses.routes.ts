import {Router} from "express";
import * as coursesController from "../controllers/courses.controller";
import { courses } from "../data/courses";


const router = Router();

router.get('/courses', coursesController.createCourses);

router.get('/courses/:id', coursesController.getCourseById);

router.post('/courses', coursesController.createCourses);

router.put('/courses/:id', coursesController.updateCourse);

router.delete('/courses/:id', coursesController.deleteCourse);


export default router;