import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='secondary'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Geek-Shop
            </Typography>
            <Button color="inherit" component={NavLink} style={({isActive}) => { return {backgroundColor: isActive ? "#6d1b7b" : ""}}} sx={{textTransform: "none"}}  to="/" end>Home</Button>

            <Button color="inherit" component={NavLink} style={({isActive}) => { return {backgroundColor: isActive ? "#6d1b7b" : ""}}} sx={{textTransform: "none"}}  to="/contact">Contact</Button>

            <Button color="inherit" component={NavLink} style={({isActive}) => { return {backgroundColor: isActive ? "#6d1b7b" : ""}}} sx={{textTransform: "none"}} to="/login">Login/Regsitration</Button>
          </Toolbar>
        </AppBar>
      </Box>    </>
  )
}

export default Navbar