import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { createError } from "../utils/error";

export function validate<T>(schema: z.ZodType<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            throw createError("Validation error", 400);
        }

        req.body = result.data;
        next();
    };
}