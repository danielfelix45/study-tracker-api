import { Request, Response } from "express";

import { courses } from "../data/courses";


export function getCourses(req: Request, res: Response) {
    res.json(courses);
}

export function getCourseById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const course = courses.find((course) => {
        return course.id === id
    })

    if(!course) {
        return res.status(404).json({message: "Course not found!"});
    }

    return res.json(course);
}

export function createCourses(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
    return res.status(400).json({ message: "Title is required" });
    }

    const newId = courses.length + 1;

    const newCourse = {
        id: newId,
        title
    }

    courses.push(newCourse)

    return res.status(201).json(newCourse)
}

export function updateCourse(req: Request, res: Response) {
    const { title } = req.body;    
    const id = Number(req.params.id);

    if (!title) {
    return res.status(400).json({ message: "Title is required" });
    }

    const index = courses.findIndex((course) => {
        return course.id === id
    })

    const course = courses[index];

    if (!course) {
        return res.status(404).json({ message: "Course not found!" });
    }

    course.title = title;

    return res.json(course);
}

export function deleteCourse(req: Request, res: Response) {
   const id = Number(req.params.id);
   
    const index = courses.findIndex((course) => {
        return course.id === id
    })
    
    const course = courses[index];

    if (!course) {
        return res.status(404).json({ message: "Course not found!" });
    }

    courses.splice(index, 1);
   
   return res.json({ message: "Course deleted successfully" });
}