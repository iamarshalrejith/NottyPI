import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      toast.error("failed to create note");
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10 text-base-content">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center text-sm mb-2 bg-yellow-200 p-4 rounded-4xl hover:bg-yellow-300"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-semibold tracking-tight">
          Create a New Note
        </h1>

        {/* Form container */}
        <div className="bg-base-100 rounded-xl p-8 space-y-6 shadow-md">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Content Input */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea textarea-bordered w-full min-h-[160px]"
            />
          </div>

          {/* Submit Button */}
          {loading ? (
            <button
              disabled
              className="btn bg-yellow-300 rounded-4xl w-full cursor-not-allowed"
            >
              Creating...
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="btn bg-yellow-300 hover:bg-yellow-400 rounded-4xl w-full"
            >
              Create Note
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
