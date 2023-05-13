import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Card, Grid, Tab, Typography } from '@mui/material'
import React from 'react'

function Reviews() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Typography sx={{
                fontSize: '22px',
                fontWeight: 400,
                color: '#424242'
            }}>
                My Reviews
            </Typography>

            <Box sx={{
                width: {
                    xs: '100%', md: '100%'
                },
                mx: 'auto', marginBottom: '50px', typography: 'body1',
            }}>



                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2, background: 'white' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" scrollButtons
                            allowScrollButtonsMobile>
                            <Tab label="To Be Reviewed" value="1" />
                            <Tab label="History" value="2" />

                        </TabList>
                    </Box >
                    {/* tab detail */}

                    <TabPanel value="1" sx={{padding:'0px'}} >
                        <Grid container >
                           <Grid item xs={12}>
                           <Card sx={{
                            borderRadius: 0,
                            padding: '20px',
                            width:'100%',
                            height:'326px'

                        }}>
                            <Typography textAlign={"center"}>
                                You don’t have any purchases to review
                            </Typography>
                        </Card>
                           </Grid>
                        </Grid>
                      

                    </TabPanel>


                    <TabPanel value="2"sx={{padding:'0px'}} >
                        <Grid container >
                           <Grid item xs={12}>
                           <Card sx={{
                            borderRadius: 0,
                            padding: '20px',
                            width:'100%',
                            height:'326px'

                        }}>
                            <Typography textAlign={"center"}>
                            You haven't written any review
                            </Typography>
                        </Card>
                           </Grid>
                        </Grid>
                      
                    </TabPanel>

                </TabContext>
            </Box>




        </div>
    )
}

export default Reviews