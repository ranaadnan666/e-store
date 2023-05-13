import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import saledata from '../home/flashsale/Data';
import { Card, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import BasicCard from '../../layout/basiccard/BasicCard';
import Profile from './Profile';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const homestoredata = [
        {
            id: 1,
            Product_img: require('../../images/store/store5.jpg'),
        },
        {
            id: 2,
            Product_img: require('../../images/store/store2.jpg'),
        },
        {
            id: 3,
            Product_img: require('../../images/store/store3.jpg'),
        },

        {
            id: 4,
            Product_img: require('../../images/store/store4.jpg'),
        },
        {
            id: 5,
            Product_img: require('../../images/store/store1.jpg'),
        },
        {
            id: 6,
            Product_img: require('../../images/store/store5.jpg'),
        },
        {
            id: 2,
            Product_img: require('../../images/store/store2.jpg'),
        },
        {
            id: 3,
            Product_img: require('../../images/store/store3.jpg'),
        },
    ]






    return (
        <Box sx={{
            width: {
                xs: '95%', md: '65%'
            },
            mx: 'auto', marginBottom: '50px', typography: 'body1',
        }}>



            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2, background: 'white' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" scrollButtons
                        allowScrollButtonsMobile>
                        <Tab label="Homepage" value="1" />
                        <Tab label="All Products" value="2" />
                        <Tab label="Profile" value="3" />
                    </TabList>
                </Box >
                {/* <Box sx={{
                    background:'white'
                 }} > */}

                {/* home */}
                <TabPanel value="1" >
                    {/* home banner */}
                    <Grid container sx={{ width: '100%', mx: 'auto', background: '#eff0f5', }} spacing={2} >
                        {homestoredata.map((item) => {
                            return (
                                <Grid item md={3} sm={6} xs={6} >
                                    <Card>
                                        <img src={item.Product_img} alt="" width={"100%"} height={"auto"} />
                                    </Card>

                                </Grid>


                            );
                        })}

                    </Grid>

                    {/* products */}


                    <Grid container sx={{ width: '100%', mx: 'auto' }} spacing={2} mt={3}>
                        {saledata.map((item) => {
                            return (
                                <Grid item md={2.4} sm={6} xs={12} >
                                    <Link to="/detail" style={{
                                        textDecoration: 'none'
                                    }}>

                                        <BasicCard image={item.Product_img} price={item.Product_price} title={item.product_title} />
                                    </Link>
                                </Grid>

                            );
                        })}

                    </Grid>

                </TabPanel>



                <TabPanel value="2">

                    <Grid container sx={{ width: '98%', mx: 'auto' }} spacing={2}>
                        {saledata.map((item) => {
                            return (
                                <Grid item md={2.4} sm={6} xs={12} >
                                    <Link to="/detail" style={{
                                        textDecoration: 'none'
                                    }}>

                                        <BasicCard image={item.Product_img} />
                                    </Link>
                                </Grid>

                            );
                        })}

                    </Grid>
                </TabPanel>



                <TabPanel value="3">
                 <Profile/>
                </TabPanel>
                {/* </Box> */}
            </TabContext>
        </Box>
    );
}