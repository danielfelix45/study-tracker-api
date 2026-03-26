import {Router} from "express";
import * as coursesController from "../controllers/courses.controller";
import { validate } from "../middlewares/validate.middleware";
import { createCourseSchema, updateCourseSchema } from "../schemas/course.schema";


const router = Router();

router.get('/courses', coursesController.getCourses);

router.get('/courses/:id', coursesController.getCourseById);

router.post('/courses', validate(createCourseSchema), coursesController.createCourse);

router.put('/courses/:id', validate(updateCourseSchema), coursesController.updateCourse);

router.delete('/courses/:id', coursesController.deleteCourse);


export default router;