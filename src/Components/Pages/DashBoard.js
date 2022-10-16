import React from 'react'
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ChangePassword from './Auth/ChangePassword';

const DashBoard = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        console.log("Logout Clicked");
        navigate("/login");
    }

    return (
            <Grid container>
                <Grid item sm={4} sx={{backgroundColor: "gray", p: 5, color: "white"}}>
                    <h2 style={{fontWeight: "bold", color: "black", fontStyle: "revert"}}>DashBoard</h2>
                    <Typography variant='h5'>Email: Sonam@gmail.com</Typography> 
                    <Typography variant='h6'>Name: Sonam</Typography> 

                    <Button variant='contained' color='warning' size='large' onClick={handleLogout}>Logout</Button>
                </Grid>

                <Grid item sm={8}>
                    <ChangePassword />
                </Grid>
            </Grid>
        )
}

export default DashBoard