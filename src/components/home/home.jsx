import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './home.css';
import { Sidebar } from './drawer';
import { BlogItems } from './cards';
import { Profile } from '../profile/profile'
import { Post } from './singlepost';
import { NewPost } from './newpost';
import { Route,Routes,Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <div className="my-1 w-100 p-2">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <h4 className="text-center">Blog App</h4>
                            <i className="fas fa-book-open blogicon mx-2"></i>
                            <div className="navitems">
                                <ul className="d-flex my-2">
                                    <Link to="/" className="text-decoration-none" style={{ color: '#000' }}>
                                        <Button size="small" color="inherit">
                                            <i className="fas fa-home homeicon"></i>
                                            <li>Home</li>
                                        </Button>
                                    </Link>
                                    <Link to="/profile" className="text-decoration-none" style={{ color: '#000' }}>
                                        <Button size="small" color="inherit">
                                            <i className="fas fa-user-circle profile"></i>
                                            <li>Profile</li>
                                        </Button>
                                    </Link>
                                    <Button size="small" color="inherit">
                                        <i className="fas fa-sliders-h settingsicon"></i>
                                        <li>Settings</li>
                                    </Button>
                                </ul>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="mx-auto">
                <Routes>
                    <Route path="/" element={<BlogItems/>}></Route>
                    <Route path="/read" element={<Post/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/write" element={<NewPost/>}></Route>
                </Routes>
                </div>
            </div>
        </>
    )
}