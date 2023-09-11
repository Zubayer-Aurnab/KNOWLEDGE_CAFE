import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className="w-2/3">
           <h1 className="text-4xl font-bold">BLOGS</h1>
        </div>
    );
};

export default Blogs;