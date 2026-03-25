export function createError(message: string, status: number) {
    const error = new Error(message) as any;
    error.status = status;
    return error;
}