import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

// routes or endpoints
// Getting all notes
router.get("/", getAllNotes);

//Getting a particular note
router.get("/:id", getNoteById);

// // Creating a notes
router.post("/", createNote);

// // Updating a notes
router.put("/:id", updateNote);

// // Deleting a notes
router.delete("/:id", deleteNote);

export default router;
