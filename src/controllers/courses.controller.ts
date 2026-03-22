import { Request, Response } from "express";
import { connection } from "../database/connection";
import { createCourseService, deleteCourseService, getAllCourses, getCourseByIdService, updateCourseService } from "../services/courses.service";


export async function getCourses(req: Request, res: Response) {
    try {
        const courses = await getAllCourses();
        return res.json(courses)
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching courses"})
    }
}

export async function getCourseById(req: Request, res: Response) {
    const id = Number(req.params.id);
    
    try {
        const course = await getCourseByIdService(id);

        if (!course) {
            return res.status(404).json({ message: "Course not found!" });
        }

        return res.json(course);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error searching for course" });
    }
}

export async function createCourse(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
    return res.status(400).json({ message: "Title is required" });
    }

    try {
        const newCourse =  await createCourseService(title);
        return res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error creating course" });
    }
}

export async function updateCourse(req: Request, res: Response) {
    const { title } = req.body;    
    const id = Number(req.params.id);

    if (!title) {
    return res.status(400).json({ message: "Title is required" });
    }

    try {
        const updated = await updateCourseService(id, title);

        if (!updated) {
            return res.status(404).json({ message: "Course not found!" });
        }

        return res.json(updated);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error updating course" });
    }
}

export async function deleteCourse(req: Request, res: Response) {
   const id = Number(req.params.id);

    
    try {
        const deleted = await deleteCourseService(id)

        if (!deleted) {
            return res.status(404).json({ message: "Course not found!" });
        }

        return res.json({message: "Course deleted!"})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error deleting course" });
    }
}