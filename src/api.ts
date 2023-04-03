import express from "express";
import morgan from "morgan";

import routerFood from "./routes/routerFood";
import errorHandler from "./middleware/errorHandler";

const api = express();

// ENVIRONMENT //
// ENVIRONMENT //

if (process.env.NODE_ENV.trim() === "production") console.log("✅ ENV: PRODUCTION");
if (process.env.NODE_ENV.trim() === "development") {
  console.log("✅ ENV: DEVELOPMENT");
  api.use(morgan("dev"));
}

// MIDDLEWARE //
// MIDDLEWARE //

api.use(express.json());

// ROUTES //
// ROUTES //

api.use("/api/v1/food", routerFood);
api.use("*", (req, res, next) => {
  res.status(404).send({
    status: "error",
    message: "Endpoint doesn't exist.",
  });
});

// ERROR HANDLER //
// ERROR HANDLER //

api.use(errorHandler);

export default api;
