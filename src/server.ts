import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";
import api from "./api";

const port = Number(process.env.PORT) || 3000;
const DATABASE = process.env.DATABASE;

// Connect Database //
// Connect Database //

mongoose.set({ strictQuery: true });
mongoose.connect(DATABASE, {}).then((connection) => console.log("✅ DATABASE CONNECTED"));

// Init Server //
// Init Server //

api.listen(port, () => {
  console.log(`✅ API AVAILABLE @ https://localhost:${port}`);
});
