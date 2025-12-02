import React, {useState} from 'react'
import { blogPosts } from '../data/blogdata'
import { Link } from 'react-router-dom';

const Blogs = () => {

    const [blogdata, setBlogdata] = useState(blogPosts);

    const truncatedData = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }
    
  return (
    <div>
        <h2>Blogs</h2>
        {
            blogdata.map((blog)=>{
                return (
                    <div key={blog.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
                        <h3>{blog.title}</h3>
                        <p> { truncatedData(blog.content, 100)} </p>

                        <Link to={`/blogs/${blog.title}`} state={{id: blog.id, title: blog.title, content: blog.content}}>Read More</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blogs