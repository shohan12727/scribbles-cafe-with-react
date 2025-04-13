// import React from 'react';
import React, {useEffect, useState} from "react";

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
            
        </div>
    );
};

export default Blog;