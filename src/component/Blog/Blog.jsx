// import React from 'react';
import React, {useEffect, useState} from "react";
import BlogOne from "../BlogOne/BlogOne";

const Blog = () => {

    const [blogs, setBlogs] = useState ([])
   
    useEffect( () => {
        fetch("blogs.json")
        .then( res => res.json())
        .then(data => setBlogs(data))
    },[])

    console.log(blogs);


    return (
        <div>
             <h1 className="text-3xl">
                Total: {blogs.length}</h1>
             <div className="all-blogs">
                {blogs.map((blog) => <BlogOne BlogOne={BlogOne}></BlogOne> )}
                </div>   
            
        </div>
    );
};

export default Blog;