import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
const app = express();
dotenv.config({ path: "./config/config.env" });

app.get("/", (req, res) => {
  res.send("Welcome to the Reservation API");
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res
    .status(201)
    .json({ message: "Data received successfully", data: { name, email } });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

dbConnection();
app.use(errorMiddleware);
export default app;
