import { useState } from "react";
import BlogPost from "../components/BlogPost";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deleteTitle, setDeleteTitle] = useState("");

  const handleAddBlog = () => {
    if (title && content) {
      setBlogs([...blogs, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const handleDeleteBlog = () => {
    setBlogs(blogs.filter((blog) => blog.title !== deleteTitle));
    setDeleteTitle("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 p-8">
      <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Blog</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="p-2 rounded border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            className="p-2 rounded border h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
            onClick={handleAddBlog}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">Delete Blog</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Title to delete"
            className="flex-1 p-2 rounded border"
            value={deleteTitle}
            onChange={(e) => setDeleteTitle(e.target.value)}
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={handleDeleteBlog}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog, index) => (
          <BlogPost key={index} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
  );
}
