import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ status: "success", message: "hei" });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`✅ SERVER @ https://localhost:${port}`));
