import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/", () => {
  res.send("Hitting the get endpoint");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`[Server]: Started listening on Port ${PORT}`);
});
