import request from "supertest";
import app from "../app";
import { connection } from "../database/connection";

afterAll(async () => {
    await connection.end();
});

describe("Courses API", () => {
    it("should return all courses", async () => {
        const response = await request(app).get("/courses");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should create a new course", async () => {
        const res = await request(app)
            .post("/courses")
            .send({ title: "JavaScript" });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.title).toBe("JavaScript");
    });

    it("should return 400 when title is invalid", async () => {
        const res = await request(app)
            .post("/courses")
            .send({ title: "JS" });

        expect(res.status).toBe(400);
    });

    it("should return 404 when course does not exist", async () => {
        const res = await request(app).get("/courses/999");

        expect(res.status).toBe(404);
    });
});