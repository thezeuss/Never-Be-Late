import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pic1 from "../../../Images/pic1.png"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UserLogin from './UserLogin';
import UserReg from './UserReg';
import TaskIcon from '@mui/icons-material/Task';
import { Typography } from '@mui/material';

const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index && (
                    <Box> {children} </Box>
                )
            }
        </div>
    )
}

const LoginReg = (props) => {
    useEffect(() => {
        props.ColorChange(100);
        // eslint-disable-next-line
    }, [])

    const [Value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <Grid container sx={{ height: "90vh" }}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${Pic1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: { xs: "none", sm: "block" }

                }}>
                </Grid>

                <Grid item lg={5} sm={7}>
                    <Box sx={{ width: '100%', height: 470 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={Value} textColor='secondary' onChange={handleChange} indicatorColor='secondary'>
                                <Tab label="Login" sx={{ textTransform: "none", fontWeight: "bold" }} />
                                <Tab label="Registration" sx={{ textTransform: "none", fontWeight: "bold" }} />
                            </Tabs>
                        </Box>

                        <TabPanel value={Value} index={0}>
                            <UserLogin />
                        </TabPanel>
                        <TabPanel value={Value} index={1}>
                            <UserReg />
                        </TabPanel>
                    </Box>

                    <Box sx={{ mt: 2, textAlign: "center" }}>
                        <TaskIcon  sx={{ color: '#6C63FF', fontSize: 100 }} />
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Task Reminder</Typography>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default LoginReg