import express from "express";
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from "../Controllers/task.controller.js";
import authMiddleware from "../Middelwares/auth.middelware.js";

const router = express.Router();

// Task routes with authentication
router.post("/createtask", authMiddleware, createTask);
router.get("/alltask", authMiddleware, getAllTasks);
router.get("/:id", authMiddleware, getTaskById);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;
