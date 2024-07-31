import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser";
dotenv.config();

import authRouter from "../routes/authRouter.js";
import mongoConn from "../config/Mongoose-connection.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use("/api/auth", authRouter);


mongoConn(process.env.MONGO_URI)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
