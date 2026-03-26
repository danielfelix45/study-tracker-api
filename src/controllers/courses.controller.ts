import { Request, Response } from "express";
import { createCourseService, 
         deleteCourseService, 
         getAllCourses, 
         getCourseByIdService, 
         updateCourseService } from "../services/courses.service";
import { createError } from "../utils/error";


export async function getCourses(req: Request, res: Response) {
    const courses = await getAllCourses();
    return res.json(courses)
}

export async function getCourseById(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        throw createError("Invalid ID", 400);
    }
    
    const course = await getCourseByIdService(id);

    if (!course) {
        throw createError("Course not found", 404);
    }

    return res.json(course);
}

export async function createCourse(req: Request, res: Response) {
    const { title } = req.body;

    const newCourse =  await createCourseService(title);

    return res.status(201).json(newCourse);
}

export async function updateCourse(req: Request, res: Response) {
    const { title } = req.body;    
    const id = Number(req.params.id);

    if (isNaN(id)) {
        throw createError("Invalid ID", 400);
    }

    const updated = await updateCourseService(id, title);

    if (!updated) {
        throw createError("Course not found", 404)
    }

    return res.json(updated);
}

export async function deleteCourse(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        throw createError("Invalid ID", 400);
    }

    const deleted = await deleteCourseService(id);

    if (!deleted) {
        throw createError("Course not found", 404);
    }

    return res.json({ message: "Course deleted" });
}