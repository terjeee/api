import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const port: Number = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ status: "success", message: "hei" });
});

// TODO: FIX CONSOLE.LOG(NODE_ENV)
if (process.env.NODE_ENV === "development") console.log("✅ ENV: DEVELOPMENT");
if (process.env.NODE_ENV === "production") console.log("✅ ENV: PRODUCTION");
console.log(process.env.NODE_ENV);

app.listen(port, () => console.log(`✅ SERVER @ https://localhost:${port}`));
