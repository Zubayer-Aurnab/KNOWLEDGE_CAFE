import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl font-bold">BLOGS : {blog.length}</h1>
            {
                blog.map((blog)=><Blog key={blog.id} blog={blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;