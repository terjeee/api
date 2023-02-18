import dotenv from "dotenv";
dotenv.config();

import api from "./api";

const port: Number = Number(process.env.PORT) || 3000;

api.listen(port, () => {
  console.log(`✅ SERVER @ https://localhost:${port}`);
});
