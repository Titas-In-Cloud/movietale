import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import movieRoutes from "./routes/moviesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// set up express and middleware
const app = express();
dotenv.config();
app.use(cors());

// controls the maximum request body size
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// set up routes
app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

// establishes connection with MongoDB database
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
