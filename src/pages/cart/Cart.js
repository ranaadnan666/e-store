import { Box, Grid } from '@mui/material';
import React from 'react';
import Left from '../../component/cart/Left';
import Right from '../../component/cart/Right';


const Cart = () => {
  return (
    <div style={{
        background: '#eff0f5',
        paddingTop:'50px',
        paddingBottom:'50px'
    }}>
    <Box width={{
        xs:'98%',
        md:'70%'
    }} mx={"auto"}>

   
    <Grid container spacing={2} >

        {/*================== left area =============*/}

      <Grid item xs={12} md={8}  >
       <Left/>
      </Grid>

          {/*================== right area =============*/}

      <Grid item xs={12} md={4}  >
      <Right/>
      </Grid>
    </Grid>
    </Box>
    </div>
  );
}

export default Cart;