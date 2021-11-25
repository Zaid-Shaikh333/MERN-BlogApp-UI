import React from 'react';
import {Button, TextField, TextareaAutosize} from '@mui/material';
import './home.css';

export const NewPost = () => {
    return(
        <div className="writepost mx-2 my-2">
            <h3 className="text-center my-2">Share your Story with Everyone</h3>
            <div className="heading d-flex">
                <TextField label="Enter Title" variant="standard" color="error" className="my-3 post-title" required
                inputProps={{style: {fontSize: 28}}}
                />
                <Button variant="standard" className="my-auto"><i className="fas fa-images"></i></Button>
            </div>
            
            <div className="my-3">
                <TextareaAutosize placeholder="Start Writing here !!!" className="post-area"/>
            </div>
            <div className="my-3">
                <Button variant="contained" color="error">
                    Publish
                </Button>
            </div>
        </div>
    )
}