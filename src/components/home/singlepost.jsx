import React from 'react';
import "./home.css";

export const Post = () => {
    return(
        <div className="singlepost mx-2 my-2">
            <h1 className="text-center my-2">Blog Title</h1>
            <h6 className="text-left mx-4 my-3">Author</h6>
            <p>
            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library.
            It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
            React can be used as a base in the development of single-page or mobile applications. 
            However, React is only concerned with state management and rendering that state to the DOM, 
            so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality
            </p>
        </div>
    )
}