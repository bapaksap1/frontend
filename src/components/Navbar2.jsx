import * as React from 'react';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "./Menu"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false)

  const Logout = async() => {
    try {
      await axios.delete('http://localhost:5000/logout')
      navigate("/login");
    } catch (error) {
      console.log(error)
      
    }
  }



  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenu(!menu)}
          >
            <MenuIcon />
          </IconButton>
          {menu && <Menu /> } 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Naufal's Project
          </Typography>
          <Button color="inherit" onClick={Logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}