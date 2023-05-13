import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../images/account/convenient.png'
import img2 from '../../images/account/purchases.png'
import img3 from '../../images/account/bonus.png'
import { NavLink } from 'react-router-dom'
const Wallet = () => {
    return (
        <div>

            <Typography sx={{
                fontSize: '22px',
                fontWeight: 400,
                color: '#424242'
            }}>
                My Wallet
            </Typography>

            <Grid container mt={1}>
                <Grid item xs={12}>
                    <Card sx={{
                        borderRadius: 0
                    }}>
                        <Box sx={{
                            paddingTop: '40px',
                            paddingBottom: '20px',
                            textAlign: 'center',
                            alignItems: 'center',
                            background: '#38bfc6',
                            color: 'white'
                        }}>
                            <Box sx={{
                                width: '80px',
                                height: '80px',
                                justifyContent: 'center',
                                mx: 'auto'
                            }}>
                                <img src="https://laz-img-cdn.alicdn.com/tfs/TB1VW.rerYI8KJjy0FaXXbAiVXa-240-240.png" alt={''} style={{
                                    width: '100%',
                                    height: 'auto'
                                }} />
                            </Box>



                            <Typography sx={{ fontSize: '24px' }}>
                                Activate Your Wallet
                            </Typography>
                            <Typography sx={{
                                fontSize: '18px'
                            }}>
                                Start your easy shopping journey

                            </Typography>
                        </Box>


                        <img
                            src={"https://laz-img-cdn.alicdn.com/tfs/TB1T0b.ev2H8KJjy0FcXXaDlFXa-1976-320.png"}
                            alt="Artist"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />



                        <Stack direction={"row"} spacing={6} width={"90%"} mx={'auto'} textAlign={"center"} alignItems={"center"}>
                            <Stack alignItems={"center"} spacing={0.5}>
                                <Box sx={{ width: '40%' }}>
                                    <img src={img1} alt="payment" width={"100%"} height={"auto"} />
                                </Box>
                                <Typography>
                                    Make convenient one-click payments
                                </Typography>
                            </Stack>
                            <Stack alignItems={"center"} spacing={2}>
                                <Box sx={{ width: '40%' }} >
                                    <img src={img2} alt="payment" width={"100%"} height={"auto"} />
                                </Box>
                                <Typography>
                                    Earn bonus on your purchases
                                </Typography>
                            </Stack>
                            <Stack alignItems={"center"} spacing={2}>
                                <Box sx={{ width: '40%' }}>
                                    <img src={img3} alt="payment" width={"100%"} height={"auto"} />
                                </Box>
                                <Typography>
                                    Get bonus from FashionCube
                                </Typography>
                            </Stack>

                        </Stack>


                        <Box sx={{
                            width: '40%',
                            mx: "auto",
                            paddingBottom: '20px'
                        }}>
                            <NavLink to={"/account/walletverification"}>

                           
                            <Button fullWidth variant="contained" sx={{
                                borderRadius: 0,
                                background: ' #f57224',
                                height: '50px',
                                marginTop: 3,
                                ":hover": {
                                    background: ' #f57224',
                                    borderColor: ' #2abbe8',

                                }
                            }} >ACTIVATE MY WALLET
                            </Button>
                            </NavLink>

                            <Typography mt={1} sx={{
                                fontSize:'12px',
                                color:'#424242',
                                textAlign:'center',
                                padding:'10px'
                                
                            }}>
                                By clicking ACTIVATE THE WALLET for the Daraz wallet service(s), 
                                I agree to be bound by the 
                                <span style={{ color: '#1a9cb7' }}> Terms and Conditions</span> and
                                <span style={{ color: '#1a9cb7' }}>    Privacy Policy</span>
                            </Typography>
                        </Box>





                    </Card>

                </Grid>

            </Grid>
        </div>
    )
}

export default Wallet