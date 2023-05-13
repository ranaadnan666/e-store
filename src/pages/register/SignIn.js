import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
function SignIn() {
    return (
        <div style={{
            background: '#eff0f5',
            paddingBottom:'30px'

        }}>

            <Box sx={{
                 width:{xs:'95%',md:'50%'},
                mx: 'auto',
                pt: 10,
                pb: 5
            }}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography sx={{
                        fontSize: '22px',
                        color: '#424242',
                        fontWeight: 400
                    }}>
                        Welcome to Fushion! Please login.

                    </Typography>
                    <Typography sx={{display:{
                        xs:'none',md:'block'
                    }}}>
                        New member?<Link style={{color:'#049cb9'}} to="/signup"> Register</Link> here
                    </Typography>
                </Stack>

                <Box mt={4} sx={{
                    background: 'white',
                    padding: '20px 0px',
                    border: "1px solid #BEBEBE",
                }} component="form" >
                    <Grid container sx={{ width: '90%' }} mx={"auto"} spacing={3}>
                        <Grid item md={6} xs={12}>
                            <Box>
                                <label>Phone Number or Email*</label>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder='Please enter your Phone Number or Email'
                                    inputProps={{
                                        style: { fontSize: '14px' }
                                    }}
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Box>

                            <Box mt={4}>
                                <label >Password*</label>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder='Please enter your password'
                                    inputProps={{
                                        style: { fontSize: '14px' }
                                    }}
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Box>
                            <Typography sx={{ textAlign: 'end',color:'#049cb9' }} mt={1} >
                                Forgot Password?
                            </Typography>

                        </Grid>
                        <Grid item md={6} xs={12}>
                   <NavLink to={"/account/manage"}>
                   <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    height: '48px'
                                    , fontSize: '14px',
                                    borderWidth: '1px',
                                    lineHeight: '46px',
                                    bgcolor: '#f57224',
                                    ":hover": {
                                        bgcolor: '#f57224',
                                    }
                                }} >
                                Sign In
                            </Button> 
                   </NavLink>
                            <Typography>
                                or, login with
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    height: '48px'
                                    , fontSize: '14px',
                                    borderWidth: '1px',
                                    lineHeight: '46px',
                                    bgcolor: '#3b5998',
                                    ":hover": {
                                        bgcolor: '#3b5998',
                                    }
                                }} >
                            <FacebookIcon  sx={{marginRight:'5px'}} />  Facebook
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                
                                    mb: 2,
                                    height: '48px'
                                    , fontSize: '14px',
                                    borderWidth: '1px',
                                    lineHeight: '46px',
                                    bgcolor: '#d34836',
                                    ":hover": {
                                        bgcolor: '#d34836',
                                    }
                                }} >
                            < GoogleIcon sx={{marginRight:'7px'}}/> Google
                            </Button>
                        </Grid>



                    </Grid>
                </Box>
                <Typography sx={{display:{
                        xs:'block',md:'none'
                    },
                    textAlign:'center'}}>
                        New member?<Link style={{color:'#049cb9'}} to="/signup"> Register</Link> here
                    </Typography>


            </Box>
        </div>
    )
}

export default SignIn