import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser";
import cors from "cors"
dotenv.config();

import authRouter from "../routes/authRouter.js";
import mongoConn from "../config/Mongoose-connection.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ["http://localhost:5173"],            
  credentials: true                  
}));

 
app.use("/api/auth", authRouter);

console.log(process.env.MONGO_URI);

mongoConn()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
