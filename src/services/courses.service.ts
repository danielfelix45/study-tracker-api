import {connection} from "../database/connection";


type Course = {
    id: number,
    title: string
}

export async function getAllCourses(): Promise<Course[]> {
    const [rows] = await (connection as any).query("SELECT * FROM courses");
    return rows;
}

export async function getCourseByIdService(id: number) {
    const [rows]: any = await (connection as any).query(
        "SELECT * FROM courses WHERE id = ?",
        [id]
    );

    if (rows.length === 0) {
        return null;
    }

    return (rows[0]);
}

export async function createCourseService(title: string): Promise<Course> {
    const [result]: any = await (connection as any).execute(
        "INSERT INTO courses (title) VALUES (?)",
        [title]
    );

    const newCourse = { id: result.insertId, title };
    return newCourse;
}

export async function updateCourseService(id: number, title: string): Promise<Course | null> {
    const [result]: any = await (connection as any).execute(
        "UPDATE courses SET title = ? WHERE id = ?",
        [title, id]
    );

    if (result.affectedRows === 0) {
        return null;
    }

    return { id, title };
}

export async function deleteCourseService(id: number): Promise<boolean> {
    const [result]: any = await (connection as any).execute(
            "DELETE FROM courses WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return false;
        }

        return true;
}