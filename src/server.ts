import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
let server: Server;
const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Connected to DB");
    server = app.listen(envVars.PORT, () => {
      console.log(`App is listening to ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
process.on("unhandledRejection", () => {
  console.log("Unhandled rejection. server shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    return;
  }
  process.exit(1);
});
process.on("uncaughtException", () => {
  console.log("Uncaught exception detected");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    return;
  }
  process.exit(1);
});
process.on("SIGTERM", () => {
  console.log("Signal terminated from your deploy server");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    return;
  }
  process.exit(1);
});
