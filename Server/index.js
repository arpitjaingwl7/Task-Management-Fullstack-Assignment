import express from "express";
import "dotenv/config";
import dbconnect from "./Database/dbConnect.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routes/user.route.js"
import taskRouter from "./Routes/task.route.js"
import cors from "cors"
let server = express();


let port = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true,
}));

// Api Routes 

server.use("/users" , userRouter);
server.use("/tasks",taskRouter)

dbconnect()
  .then(() => {
    console.log("Database  is connected ");

    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(" DataBase error ", err);
  });
  