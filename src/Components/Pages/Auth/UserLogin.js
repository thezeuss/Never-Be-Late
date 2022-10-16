import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { GoogleLogin } from '@react-oauth/google';

const UserLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const responseGoogle = async (authResult) => {
    console.log(authResult)
    handleSubmit("", authResult.credential)
};  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // console.log("data", data.get("email"));

    const actualData = {
      email: data.get("email"),
      password: data.get("password")
    };

    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      setError({
        status: true,
        msg: "Login",
        type: "success"
      })

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    }
    else {
      setError({
        status: true,
        msg: "All Fields are Required",
        type: "error"
      })
      console.log("All Fields are Required");
    }
  };

  return (
    <>
      <Box component='form' sx={{ mt: 2 }} noValidate id="login-form" onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id='email' type="email" name='email' label="Email Address" />

        <TextField margin="normal" required fullWidth type="password" id='password' name='password' label="Password" />

        <Box textAlign="center">
          <Button type='submit' variant='contained' sx={{ mt: 3, px: 5 }}> Login </Button>
        </Box>

        <NavLink to="/sendpasswordresetemail"> Forgot Password </NavLink>
        <GoogleLogin
                            // onSuccess={credentialResponse => {
                            //     console.log(credentialResponse);
                            //     console.log(jwtDecode(credentialResponse.credential))
                            // }}
                            onSuccess={responseGoogle}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
        {error.status && <Alert severity={error.type} sx={{ mt: 1 }}>{error.msg}!</Alert>}
      </Box>
    </>
  )
}

export default UserLogin