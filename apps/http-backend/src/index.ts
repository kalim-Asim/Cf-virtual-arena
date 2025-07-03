import express from "express";
import { prisma } from "@repo/db";

const app = express();

app.listen(3001, () => {
  console.log("Server Started...")
})
