import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AddStudentForm from './Components/AddStudentForm';
import DisplayStudentTable from './Components/DisplayStudentTable';
import Courses from './Components/Courses';   
import Home from './Components/Home';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleListItemClick = (path) => {
    setSelectedItem(path);
    setOpen(false); // Close the drawer after clicking on a list item
  };

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  useEffect(() => {
    const updateAppBarStyles = () => {
      const appBar = document.getElementById('app-bar');
      if (appBar) {
        appBar.style.transition = 'width 0.3s';
        appBar.style.width = open ? 'calc(100% - 240px)' : '100%';
      }
    };
    updateAppBarStyles();
    window.addEventListener('resize', updateAppBarStyles);

    return () => {
      window.removeEventListener('resize', updateAppBarStyles);
    };
  }, [open]);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <AppBar position="fixed" id="app-bar">
          <Toolbar>
            <Typography variant="h6" noWrap ml={30}>
              <IconButton size="large" variant="contained" onClick={handleClick} ml={30}>
                <MenuIcon />
              </IconButton>
              Corporate Internship
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={open} onClose={() => setOpen(false)}
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <List>
            <ListItem Button component={Link} to="/" Selected={selectedItem === '/'} onClick={() => handleListItemClick('/')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem Button component={Link} to="/Add" selected={selectedItem === '/Add'} onClick={() => handleListItemClick('/Add')}>
              <ListItemText primary="Add Student" />
            </ListItem>
            <ListItem Button component={Link} to="/View" selected={selectedItem === '/View'} onClick={() => handleListItemClick('/View')}>
              <ListItemText primary="View Student" />
            </ListItem>
            <ListItem
              Button
              component={Link}
              to="/Courses"
              selected={selectedItem === '/Courses'}
              onClick={() => handleListItemClick('/Courses')}>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem
              Button
              component={Link}
              to="/Internship"
              selected={selectedItem === '/Internship'}
              onClick={() => handleListItemClick('/Internship')}>
              <ListItemText primary="Internship Details" />
            </ListItem>
            <ListItem
              Button
              component={Link}
              to="/Programming"
              selected={selectedItem === '/Programming'}
              onClick={() => handleListItemClick('/Programming')}>
              <ListItemText primary="Programming Language" />
            </ListItem>
          </List>
        </Drawer>
        <main style={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Add" element={<AddStudentForm onAddStudent={addStudent} />} />
            <Route path="/View" element={selectedItem === '/View' ?
             <DisplayStudentTable students={students} /> : null} />
            <Route
              path="/Courses"element={ selectedItem === '/Courses' ? (
                  <Courses />  ) : null } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
