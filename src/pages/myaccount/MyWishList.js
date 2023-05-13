import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Card, Grid, Rating, Tab, Typography } from '@mui/material'
import React from 'react'
import JustFor from '../../component/home/justforyou/JustFor';
import BasicCard from '../../layout/basiccard/BasicCard';
import saledata from '../../component/home/flashsale/Data';

function MyWishList() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Typography sx={{
                fontSize: '22px',
                fontWeight: 400,
                color: '#424242'
            }}>
                My Wishlist & Followed Stores (0)
            </Typography>

            <Box sx={{
                width: {
                    xs: '100%', md: '100%'
                },
                mx: 'auto', marginBottom: '50px', typography: 'body1',
                marginTop: '10px'
            }}>



                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2, background: 'white' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" scrollButtons
                            allowScrollButtonsMobile>
                            <Tab label="My Wishlist" value="1" />
                            <Tab label="Past Purchases" value="2" />
                            <Tab label="Followed Stores" value="3" />

                        </TabList>
                    </Box >
                    {/* tab detail */}

                    <TabPanel value="1" sx={{ padding: '0px' }} >
                        <Grid container >
                            <Grid item xs={12}>
                                <Card sx={{
                                    borderRadius: 0,
                                    padding: '20px',
                                    width: '100%',
                                    height: '326px'

                                }}>
                                    <Typography textAlign={"center"}>

                                        There are no favorites yet.

                                    </Typography>
                                    <Typography textAlign={"center"}>
                                        Add your favorites to wishlist and they will show here.
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>


                        <Box mt={4} sx={{
                            paddingBottom: '50px',
                        }} >

                            <Typography
                                component={"h3"}
                                sx={{
                                    color: '#424242',
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: '22px',
                                    textAlign: 'center',
                                    fontWeight: 600,
                                    marginBottom: 2
                                }}>
                                Just For You
                            </Typography>

                            <Grid container spacing={2}>
                                {saledata.map((item) => {
                                    return (
                                        <Grid item md={3} sm={6} xs={12}>
                                            <BasicCard
                                                image={item.Product_img}
                                                price={item.Product_price}
                                                title={item.product_title}
                                                rating={<Rating name="read-only" value={item.value} readOnly />}
                                            />

                                        </Grid>

                                    );
                                })}

                            </Grid>

                        </Box>


                    </TabPanel>


                    <TabPanel value="2" sx={{ padding: '0px' }} >
                        <Grid container alignItems={"center"}>
                            <Grid item xs={12}>
                                <Card sx={{
                                    borderRadius: 0,
                                    padding: '20px',
                                    width: '100%',
                                    height: '326px'

                                }}>
                                    <Typography textAlign={"center"}>

                                        There are no favorites yet.

                                    </Typography>
                                    <Typography textAlign={"center"}>
                                        Add your favorites to wishlist and they will show here.
                                    </Typography>
                                </Card>


                            </Grid>
                        </Grid>

                        <Box mt={4} sx={{
                            paddingBottom: '50px',
                        }} >

                            <Typography
                                component={"h3"}
                                sx={{
                                    color: '#424242',
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: '22px',
                                    textAlign: 'center',
                                    fontWeight: 600,
                                    marginBottom: 2
                                }}>
                                Just For You
                            </Typography>

                            <Grid container spacing={2}>
                                {saledata.map((item) => {
                                    return (
                                        <Grid item md={3} sm={6} xs={12}>
                                            <BasicCard
                                                image={item.Product_img}
                                                price={item.Product_price}
                                                title={item.product_title}
                                                rating={<Rating name="read-only" value={item.value} readOnly />}
                                            />

                                        </Grid>

                                    );
                                })}

                            </Grid>

                        </Box>

                    </TabPanel>


                    <TabPanel value="3" sx={{ padding: '0px' }} >
                        <Grid container >
                            <Grid item xs={12}>
                                <Card sx={{
                                    borderRadius: 0,
                                    padding: '20px',
                                    width: '100%',
                                    height: '326px'

                                }}>
                                    <Typography textAlign={"center"}>
                                        You didn’t follow any store
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>

                    </TabPanel>

                </TabContext>
            </Box>
        </>
    )
}

export default MyWishList