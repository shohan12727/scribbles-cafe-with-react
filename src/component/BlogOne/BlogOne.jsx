import React from 'react';

const BlogOne = ({blogs}) => {
    console.log(blogs);
    return (
        <div>
            <h1>{blogs.id}</h1>
        </div>
    );
};

export default BlogOne;

