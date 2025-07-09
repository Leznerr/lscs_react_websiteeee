// src/components/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost'; // Import the BlogPost component

function BlogSection() {
  // State to hold the list of blog posts
  // We'll use localStorage to persist posts, similar to your original JS
  const [blogPosts, setBlogPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // State for the new blog post form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Effect to save blogPosts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]); // Dependency array: runs whenever blogPosts changes

  // Function to create a new blog post
  const createBlogPost = () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('Please fill in both title and content fields!');
      return;
    }

    const newPost = {
      id: Date.now(), // Use a timestamp for a unique ID
      title: title.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
    };

    setBlogPosts(prevPosts => [newPost, ...prevPosts]); // Add new post to the beginning of the array
    setTitle(''); // Clear the title input
    setContent(''); // Clear the content input
    alert('Blog post created successfully!');
  };

  // Function to delete a blog post
  const deleteBlogPost = (postId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      alert('Blog post deleted successfully!');
    }
  };

  // Handle Enter key press on title input
  const handleTitleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      createBlogPost();
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-0 bg-gray-900 text-white min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">My Blog</h2>

        {/* Blog Post Form */}
        <div className="blog-form bg-white bg-opacity-15 backdrop-blur-md p-8 mb-12 rounded-2xl border border-white border-opacity-20 shadow-lg max-w-2xl mx-auto animate-fadeInUp delay-100">
          <input
            type="text"
            id="blog-title"
            placeholder="Enter blog title"
            className="w-full p-4 mb-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleTitleKeyPress} // Handle Enter key press
          />
          <textarea
            id="blog-content"
            placeholder="Write your blog content here..."
            rows="6" // Approximate original height
            className="w-full p-4 mb-6 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-500 placeholder-gray-400 resize-y" // resize-y allows vertical resize
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            onClick={createBlogPost}
            id="create-blog-btn"
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Create Blog Post
          </button>
        </div>

        {/* Blog Posts Container */}
        <div id="blog-posts" className="blog-container max-w-4xl mx-auto">
          {blogPosts.length === 0 ? (
            <p className="text-center text-gray-400 text-xl">No blog posts yet. Be the first to create one!</p>
          ) : (
            blogPosts.map((post) => (
              <BlogPost
                key={post.id} // Key prop is crucial for React list rendering performance
                id={post.id}
                title={post.title}
                content={post.content}
                date={post.date}
                onDelete={deleteBlogPost}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;