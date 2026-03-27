export function createError(message: string, status: number, details?: any) {
    const error = new Error(message) as any;
    error.status = status;
    error.details = details;
    return error;
}