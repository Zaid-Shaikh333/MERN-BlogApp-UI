import React from 'react';
import Button from '@mui/material/Button';
import {  Link } from 'react-router-dom';
//import { Post } from './singlepost';

export const BlogItems = () => {
    return (
        <>
            
            <div className="blogcards">
                <div className="card">
                    <h1>Blog Title</h1>
                    <p>Blog Meta Description</p>
                    <Button variant="contained" className="mx-auto" size="small" color="primary">Read More</Button>
                </div>
                <div className="card">
                    <h1>Blog Title</h1>
                    <p>Blog Meta Description</p>
                    <Button variant="contained" className="mx-auto" size="small" color="primary">Read More</Button>
                </div>
                <div className="card">
                    <h1>Blog Title</h1>
                    <p>Blog Meta Description</p>
                    <Button variant="contained" className="mx-auto" size="small" color="primary">Read More</Button>
                </div>
                <div className="card">
                    <h1>Blog Title</h1>
                    <p>Blog Meta Description</p>
                    <Link to="/read" className="text-decoration-none">
                        <Button variant="contained" className="mx-auto" size="small" color="primary">
                            Read More
                        </Button>
                    </Link>
                </div>
                <div className="card">
                    <h1>Blog Title</h1>
                    <p>Blog Meta Description</p>
                    <Button variant="contained" className="mx-auto" size="small" color="primary">Read More</Button>
                </div>
            </div>
        </>
    )
}