import React, { useEffect, useState } from 'react';
//import Drawer from '@mui/material/Drawer';
import './home.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export const Sidebar = () => {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      dark: {
        main: '#1e1c1a',
        contrastText: '#fff',
      },
    },
  });
  const [category, setCategory] = useState({
    Sports: false,
    Entertainment: false,
    Technology: false
  })
  useEffect(() => {

  }, [category])
  return (
    <div className="sidebar">
      <h4 className="text-center my-3">Select Topics</h4>
      <ul className="mx-3">
        <ThemeProvider theme={theme}>
          <li>
            <Button size="small" variant="contained" color="dark"
              onClick={() => setCategory({ ...category, Sports: !category.Sports })}
            >
              Sports
              {category.Sports ? <i className="fas fa-check-circle circled"></i> : <i className="fas fa-plus plus"></i>}
            </Button>
          </li>
          <li>
            <Button size="small" variant="contained" color="dark"
              onClick={() => setCategory({ ...category, Entertainment: !category.Entertainment })}>
              Entertainment
              {category.Entertainment ? <i className="fas fa-check-circle circled"></i> : <i className="fas fa-plus plus"></i>}
            </Button>
          </li>
          <li>
            <Button size="small" variant="contained" color="dark"
              onClick={() => setCategory({ ...category, Technology: !category.Technology })}>
              Technology
              {category.Technology ? <i className="fas fa-check-circle circled"></i> : <i className="fas fa-plus plus"></i>}
            </Button>
          </li>
        </ThemeProvider>
      </ul>
      <div className="newpost my-3 text-center">
        <h4 className="text-center my-3">Write New Post</h4>
        <div className="mx-3">
          <i className="fas fa-arrow-down text-center arrow-down mb-3"></i>
        </div>
        <Link to="write" className="text-decoration-none">
          <Button size="medium" variant="contained" color="error">
            <i className="fas fa-feather-alt"></i>
          </Button>
        </Link>
      </div>
    </div>
  )
}