import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // Assuming the response data is an array of blog posts
        setBlogs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

 

  // Previous page
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const handleNextClick = () => {
    if (currentPage < Math.ceil(blogs.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {currentPosts.map((blog, index) => (
        <div key={index}>
         
          <a href={`/ttle/${blog.title}`}>
         <h4>  {blog.title}  </h4>    

          </a>
        </div>
      ))}
      <div>
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Previous
        </button>
       
        <button onClick={handleNextClick} disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};