import { Request, Response } from "express";
import { connection } from "../database/connection";


export async function getCourses(req: Request, res: Response) {
    try {
        const [rows] = await (connection as any).query("SELECT * FROM courses");
        return res.json(rows)
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: "Error searching for courses"})
    }
}

export async function getCourseById(req: Request, res: Response) {
    const id = Number(req.params.id);
    
    try {
        const [rows]: any = await (connection as any).query(
            "SELECT * FROM courses WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Course not found!" });
        }

        return res.json(rows[0]);
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
        const [result]: any = await (connection as any).execute(
            "INSERT INTO courses (title) VALUES (?)",
            [title]
        );

        // result.insertId contém o ID gerado pelo AUTO_INCREMENT
        const newCourse = { id: result.insertId, title };
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
        const [result]: any = await (connection as any).execute(
            "UPDATE courses SET title = ? WHERE id = ?",
            [title, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Course not found!" });
        }

        return res.json({ id, title });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error updating" });
    }
}

export async function deleteCourse(req: Request, res: Response) {
   const id = Number(req.params.id);

    
    try {
        const [result]: any = await (connection as any).execute(
            "DELETE FROM courses WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Course not found!" });
        }

        return res.json({ message: "Course deleted!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error deleting course" });
    }
}