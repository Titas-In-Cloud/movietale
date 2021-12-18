import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import database_logger from "./conf/database_logger.js";
import error_logger from "./conf/error_logger.js";

import movieRoutes from "./routes/moviesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// set up express and middleware
const app = express();
dotenv.config();

// controls the maximum request body size
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

// set up routes
app.use("/movies", movieRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

// establishes connection with MongoDB database
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => database_logger.log("info", `Server is running on port: ${PORT}`)))
    .catch((error) => error_logger.log(error.message));
