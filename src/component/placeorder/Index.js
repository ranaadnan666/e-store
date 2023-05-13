import React from 'react'
import Left from './Left'
import Right from './Right'
import { Box, Grid } from '@mui/material'

const PlaceOrder = () => {
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
  )
}

export default PlaceOrder