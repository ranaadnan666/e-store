import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Card, Grid, Tab, Typography } from '@mui/material'
import React from 'react'
import BasicMenu from './LastOrder';
import Shop from './Shop';

function Order() {
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
        My Orders
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
              <Tab label="All" value="1" />
              <Tab label="To Pay" value="2" />
              <Tab label="To ship" value="3" />
              <Tab label="To Recieve" value="4" />


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
                  <BasicMenu />
                  <Shop />
                </Card>
              </Grid>
            </Grid>


          </TabPanel>


          <TabPanel value="2" sx={{ padding: '0px' }} >
            <Grid container >
              <Grid item xs={12}>
                <Card sx={{
                  borderRadius: 0,
                  padding: '20px',
                  width: '100%',
                  height: '326px'

                }}>
                  <Shop />
                </Card>
              </Grid>
            </Grid>

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
                  <Shop />
                </Card>
              </Grid>
            </Grid>

          </TabPanel>




          <TabPanel value="4" sx={{ padding: '0px' }} >
            <Grid container >
              <Grid item xs={12}>
                <Card sx={{
                  borderRadius: 0,
                  padding: '20px',
                  width: '100%',
                  height: '326px'

                }}>
                  <Shop />
                </Card>
              </Grid>
            </Grid>

          </TabPanel>

        </TabContext>


      </Box>




    </div>
  )
}

export default Order


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import BasicMenu from './LastOrder';
// import Shop from './Shop';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const TabsOrder=()=> {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="To Pay" {...a11yProps(1)} />
//           <Tab label="To ship" {...a11yProps(2)} />
//           <Tab label="To Recieve" {...a11yProps(3)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//      <BasicMenu/>
// <Shop/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
// <Shop/>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//       <Shop/>

//       </TabPanel>
//       <TabPanel value={value} index={3}>
//       <Shop/>

//       </TabPanel>
//     </Box>
//   );
// }
// export default TabsOrder