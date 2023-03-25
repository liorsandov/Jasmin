import React from 'react';
import './MainAppBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MainAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="pointerClick" onClick={() => props.setView ? props.setView('homePage') : console.log(false)}>
              Welcome to React DemoBank
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}