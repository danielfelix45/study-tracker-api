import { connection } from "../../database/connection";
import { updateCourseProgress } from "../../services/courses.service";

export async function createSessionService(
  userId: number,
  courseId: number,
  duration: number,
  date: string,
) {
  const [result]: any = await connection.execute(
    `INSERT INTO study_sessions (user_id, course_id, date, duration)
     VALUES (?, ?, ?, ?)`,
    [userId, courseId, date, duration],
  );

  // verifica se o curso existe
  const [course]: any = await connection.execute(
    "SELECT * FROM courses WHERE id = ? AND user_id = ?",
    [courseId, userId],
  );

  if (course.length === 0) {
    throw new Error("Course not found");
  }

  await updateCourseProgress(courseId);

  return {
    id: result.insertId,
    userId,
    courseId,
    date,
    duration,
  };
}
