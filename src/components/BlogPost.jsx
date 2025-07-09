// src/components/BlogPost.jsx
import React from 'react';

function BlogPost({ id, title, content, date, onDelete }) {
  return (
    <div className="blog-post bg-white bg-opacity-15 backdrop-blur-md p-8 mb-8 rounded-2xl border border-white border-opacity-20 shadow-lg animate-fadeInUp">
      <div className="blog-post-content text-white"> {/* Ensure text is white as per Hero section */}
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="blog-post-meta text-gray-300 text-sm italic mb-4">Published on {date}</div>
        <p className="text-lg leading-relaxed mb-6">{content}</p>
        <button
          onClick={() => onDelete(id)}
          className="btn-delete bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default BlogPost;