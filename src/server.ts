import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port: Number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`✅ SERVER @ https://localhost:${port}`);
});
