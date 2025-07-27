import React from "react";
import { Link } from "react-router";
import { Pencil, Trash2 } from "lucide-react";
import api from "../lib/axios"
import { toast } from "react-hot-toast";

const NoteCard = ({ note,setNotes }) => {
  const formattedDate = new Date(note.createdAt).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });


  const handleDelete = async(e,id) =>{
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await api.delete(`/notes/${id}`);
        setNotes((prev)=> prev.filter(note => note._id !== id));
        toast.success("Note deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete note. Please try again.");
      }
    }
  }
  return (
    <div className="relative">
      {/* Circle Pin */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10">
        <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-black shadow-md"></div>
      </div>

      {/* Note Card */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-300 pt-3">
        <div className="card-body">
          <div className="flex justify-between items-start">
            <Link to={`/note/${note._id}`} className="flex-1">
              <h2 className="card-title text-xl font-bold text-neutral">
                {note.title}
              </h2>
              <p className="text-sm mt-1">{note.content}</p>
            </Link>

            <div className="flex gap-2">
              <button
                className="p-1 text-gray-600 hover:text-primary transition"
                style={{ background: 'none', border: 'none' }}
              >
                <Pencil size={18} />
              </button>
              <button
                className="p-1 text-red-500 hover:text-red-700 transition"
                style={{ background: 'none', border: 'none' }}
                onClick={(e)=>handleDelete(e,note._id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500 mt-3">
            Created: {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
