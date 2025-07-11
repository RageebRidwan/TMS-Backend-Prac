import express, { Application, NextFunction, Request, Response } from "express";
import { userRoutes } from "./app/modules/user/user.routes";
import cors from "cors";
import { router } from "./app/routes";
import { envVars } from "./app/config/env";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
// app.use("/api/v1/tour", tourRoutes);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to TMS Backend",
  });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
