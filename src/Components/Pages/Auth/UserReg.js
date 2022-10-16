import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from "@mui/material"
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const UserReg = (props) => {
    const navigate = useNavigate();

    const [error, seterror] = useState({
        status: false,
        type: "",
        msg: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);

        const actualData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            cpassword: data.get("cpassword"),
            tc: data.get("tc")
        }

        if (actualData.name && actualData.email && actualData.password && actualData.cpassword && actualData.tc) {
            if (actualData.password !== actualData.cpassword) {
                return seterror({
                    status: true,
                    type: "error",
                    msg: "Password and Confirm-Password are not match"
                })
            }
            console.log(actualData);
            seterror({
                status: true,
                type: "success",
                msg: "Successfully Account Created"
            });

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }
        else {
            console.log("All Fields are required");
            seterror({
                status: true,
                type: "error",
                msg: "All Fields are Required"
            });
        }
    }

    return (
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
            <TextField margin='normal' label="Username" name='name' id='name' fullWidth required />
            <TextField margin='normal' label="Email" name='email' id='email' fullWidth required />
            <TextField margin='normal' type="password" label="Password" name='password' id='password' fullWidth required />
            <TextField margin='normal' type="password" label="confirm Password" name='cpassword' id='cpassword' fullWidth required />

            <FormControlLabel control={<Checkbox value="agree" name="tc" id="tc" color='secondary' />} label="I Agree to Term and Condition" />

            <Box textAlign="center">
                <Button type='submit' variant='contained' sx={{ mt: 2, px: 5 }}>Join</Button>
            </Box>

            {error.status && <Alert severity={error.type} sx={{ mt: 1 }}>{error.msg}</Alert>}
        </Box>
    )
}

export default UserReg;