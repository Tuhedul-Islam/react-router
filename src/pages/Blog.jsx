import React, {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogdata'

const Blog = () => {

  const navigate = useNavigate();
  const { title } = useParams();

  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    //const blog = blogPosts.find((blog) => blog.title === title);
    const blogContent = blogPosts.filter((blog) => blog.title === title);
    
    if (blogContent) {
      setBodyData(blogContent[0].content);
      //setBodyData(blog.content);
    }
  }, [title]);

  return (
    <div>
        <h2> {title} </h2>
        <p> { bodyData } </p>

        {/* Redirect to Blogs: */}
        <button onClick={() => navigate('/blogs')}>Back to Blogs</button>
        {/* //Not Appropriate Way: Use this only for Link Component like menu or navigation
        <Link to={`/blogs/`} >Back to Blogs</Link> */}
    </div>
  )
}

export default Blog