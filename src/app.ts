import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./routes/index"
import { errorHandler } from "./middlewares/error.middleware";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";
import sessionRoutes from "./modules/sessions/sessions.routes";


const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(router);
app.use(errorHandler);
app.use("/sessions", sessionRoutes);

export default app;