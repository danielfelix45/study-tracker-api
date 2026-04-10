import {connection} from "../database/connection";


type Course = {
    id: number,
    title: string,
    description: string,
    progress: number
}

export async function getAllCourses(userId: number): Promise<Course[]> {
    const [rows] = await (connection as any).query(
        "SELECT * FROM courses WHERE user_id = ?",
        [userId]
    );
    return rows;
}

export async function getCourseByIdService(id: number, userId: number) {
    const [rows]: any = await (connection as any).query(
        "SELECT * FROM courses WHERE id = ? AND user_id = ?",
        [id, userId]
    );

    if (rows.length === 0) return null;

    return rows[0];
}

export async function createCourseService(title: string, description: string, userId: number): Promise<Course> {
    const [result]: any = await connection.execute(
    "INSERT INTO courses (title, description, user_id) VALUES (?, ?, ?)",
    [title, description, userId]
    );

    return {
        id: result.insertId,
        title,
        description,
        progress: 0
    };
}

export async function updateCourseService(
    id: number,
    title: string,
    description: string,
    userId: number
): Promise<Course | null> {

    const [result]: any = await connection.execute(
        "UPDATE courses SET title = ?, description = ? WHERE id = ? AND user_id = ?",
        [title, description, id, userId]
    );

    if (result.affectedRows === 0) return null;

    return { id, title, description, progress: 0 };
}

export async function deleteCourseService(id: number, userId: number): Promise<boolean> {
    const [result]: any = await (connection as any).execute(
        "DELETE FROM courses WHERE id = ? AND user_id = ?",
        [id, userId]
    );

    return result.affectedRows > 0;
}