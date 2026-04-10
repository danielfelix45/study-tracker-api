import { Request, Response } from "express";
import { createCourseService, 
         deleteCourseService, 
         getAllCourses, 
         getCourseByIdService, 
         updateCourseService } from "../services/courses.service";
import { createError } from "../utils/error";


export async function getCourses(req: Request, res: Response) {
    const userId = req.user!.userId;

    const courses = await getAllCourses(userId);

    res.json(courses);
}

export async function getCourseById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const userId = req.user!.userId;

    if (isNaN(id)) {
        throw createError("Invalid ID", 400);
    }

    const course = await getCourseByIdService(id, userId);

    if (!course) {
        throw createError("Course not found", 404);
    }

    return res.json(course);
}

export async function createCourse(req: Request, res: Response) {
    const { title, description } = req.body;
    const userId = req.user!.userId;

    const newCourse =  await createCourseService(title, description || "", userId);

    return res.status(201).json(newCourse);
}

export async function updateCourse(req: Request, res: Response) {
    const { title, description } = req.body;    
    const id = Number(req.params.id);
    const userId = req.user!.userId;

    if (isNaN(id)) {
        throw createError("Invalid ID", 400);
    }

    const updated = await updateCourseService(id, title, description, userId);

    if (!updated) {
        throw createError("Course not found", 404)
    }

    return res.json(updated);
}

export async function deleteCourse(req: Request, res: Response) {
    const id = Number(req.params.id);
    const userId = req.user!.userId;


    if (isNaN(id)) {
        throw createError("Invalid ID", 400);
    }

    const deleted = await deleteCourseService(id, userId);

    if (!deleted) {
        throw createError("Course not found", 404);
    }

    return res.status(200).json({ message: "Course deleted" });
}