import express from "express";
import morgan from "morgan";

import controllerAuth from "./controllers/controllerAuth";

const app = express();

// ENVIRONMENT //
// ENVIRONMENT //

if (process.env.NODE_ENV.trim() === "production") console.log("✅ ENV: PRODUCTION");
if (process.env.NODE_ENV.trim() === "development") {
  console.log("✅ ENV: DEVELOPMENT");
  app.use(morgan("dev"));
}

// MIDDLEWARE //
// MIDDLEWARE //

app.use(express.json());

// ROUTES //
// ROUTES //

app.use("/api/v1/auth", controllerAuth);

app.use("*", (req, res, next) => {
  res.status(404).send({ status: "error", message: "Endpoint doesn't exist." });
});

// ERROR //
// ERROR //

export default app;
