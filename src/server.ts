import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const port: Number = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ status: "success", message: "hei" });
});

app.listen(port, () => console.log(`✅ SERVER @ https://localhost:${port}`));
