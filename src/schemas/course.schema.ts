import { z } from "zod";

export const createCourseSchema = z.object({
    title: z.string().min(3, "Title must have at least 3 characters"),
    description: z.string().optional()
});

export const updateCourseSchema = z.object({
    title: z.string().min(3, "Title must have at least 3 characters"),
    description: z.string().optional()
})