import {Router} from "express";
import * as coursesController from "../controllers/courses.controller";
import { validate } from "../middlewares/validate.middleware";
import { createCourseSchema, updateCourseSchema } from "../schemas/course.schema";


const router = Router();

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     responses:
 *       200:
 *         description: List of courses
 */
router.get('/courses', coursesController.getCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get course by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course found
 *       404:
 *         description: Course not found
 */
router.get('/courses/:id', coursesController.getCourseById);
/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Node.js
 *     responses:
 *       201:
 *         description: Course created
 */
router.post('/courses', validate(createCourseSchema), coursesController.createCourse);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Course
 *     responses:
 *       200:
 *         description: Course updated
 *       404:
 *         description: Course not found
 */
router.put('/courses/:id', validate(updateCourseSchema), coursesController.updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted
 *       404:
 *         description: Course not found
 */
router.delete('/courses/:id', coursesController.deleteCourse);


export default router;



