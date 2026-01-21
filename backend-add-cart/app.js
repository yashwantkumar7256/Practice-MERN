
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/bookRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

//  Database connect
mongoose.connect(URI)
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.log(" DB Error:", err.message));

  //Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/books", bookRoute);
app.use("/auth", authRoute);

// ✅ Server
app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
