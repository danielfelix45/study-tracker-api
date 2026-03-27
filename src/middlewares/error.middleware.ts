import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction 
) {
    if (process.env.NODE_ENV !== "test") {
    console.error(err);
}

    return res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Internal server error",
        ...(err.details && { details: err.details })
    });
}