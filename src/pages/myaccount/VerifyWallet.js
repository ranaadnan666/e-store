import { Box, Button, Card, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function VerifyWallet() {
    return (
        <>
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
                        borderRadius: 0,
                        padding: '20px'
                    }}>



                        <Stack direction={"row"}
                            width={"90%"}
                            mx="auto"
                            mt={4}
                            spacing={2}
                            alignItems={"center"}
                        >
                            <Box>
                                <PhoneIphoneIcon sx={{ fontSize: '48px', color: ' #1777ed' }} />
                            </Box>
                            <Typography sx={{
                                width: {xs:'90%',sm:'400px'},
                                color: '#333'
                            }}>

                                We will send a one time SMS code to your Mobile Number
                            </Typography>

                        </Stack>


                        <Stack direction={{xs:'column' ,sm:'row'}}
                            width={"90%"}
                            mx="auto"
                            spacing={2}
                            rowGap={1}
                            alignItems={"center"}
                            mt={4}
                            mb={2}
                        >
                            <Box sx={{
                                width: '100px'
                            }}>
                                <TextField
                                    sx={{
                                        height: '40px'
                                    }}
                                    disabled
                                    id="outlined-disabled"
                                    placeholder='+92'
                                />
                            </Box>

                            <Box sx={{
                                width: {
                                    xs:'100%',
                                    sm:'35%'
                                }
                            }} >
                                <TextField
                                    sx={{
                                        height: '40px'
                                    }}
                                    required
                                    fullWidth
                                    placeholder='Please enter your Phone Number'
                                    inputProps={{
                                        style: { fontSize: '14px' }
                                    }}
                                    id="Number"
                                    name="Number"
                                    autoComplete="Number"
                                />
                            </Box>

                        </Stack>


                        <Box mt={4} sx={{
                            width: '90%',
                            mx: 'auto'

                        }} >
                            <TextField
                                sx={{
                                    height: '40px',
                                    width: {
                                        xs:'100%',
                                        sm:'50%'
                                    }
                                }}
                                required
                                fullWidth
                                placeholder='sms verification code'
                                inputProps={{
                                    style: { fontSize: '14px' }
                                }}
                                id="Number"
                                name="Number"
                                autoComplete="Number"
                            />


                        </Box>

                        <Box mt={4} sx={{
                            width: '90%',
                            mx: 'auto'

                        }} >

                            <Button
                                type="submit"

                                variant="contained"
                                sx={{
                                    width: {xs:'100%',sm:'50%'},
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
                                verify code
                            </Button>
                        </Box>

                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default VerifyWallet