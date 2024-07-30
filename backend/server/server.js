import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser"
dotenv.config({path:"../.env"});

const PORT = process.env.PORT || 3000
const app = express();
console.log(process.env.PORT)

app.use(cookie())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
})



