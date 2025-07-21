import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

// routes or endpoints
// Getting the notes
router.get("/", getAllNotes);

// // Creating a notes
router.post("/", createNote);

// // Updating a notes
router.put("/:id", updateNote);

// // Deleting a notes
router.delete("/:id", deleteNote);

export default router;
