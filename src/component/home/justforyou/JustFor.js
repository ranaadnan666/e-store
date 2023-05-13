import { Box, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import saledata from '../flashsale/Data';
import BasicCard from '../../../layout/basiccard/BasicCard';

function JustFor() {
    return (
        <div>


            <Box sx={{
                width: {
                    xs: '95%', md: '65%'
                },
                mx: 'auto', paddingBottom: '50px',
            }} >

                <Typography
                    component={"h3"}
                    sx={{
                        color: '#424242',
                        fontFamily: 'Roboto-Regular',
                        fontSize: '22px',
                          textAlign:'center',
                        fontWeight:600,
                        marginBottom:2
                    }}>
                    Just For You
                </Typography>

                <Grid container spacing={2}>
                    {saledata.map((item) => {
                        return (
                            <Grid item md={2.4} sm={6} xs={12}>
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


        </div>
    )
}

export default JustFor