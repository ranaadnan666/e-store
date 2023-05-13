import {  Card, Grid, Typography } from '@mui/material'
import React from 'react'
import PaymentIcon from '@mui/icons-material/Payment';
function PaymentOption() {
  return (
   <>
     <Typography mt={1} sx={{
        fontSize: '22px',
        fontWeight: 400,
        color: '#424242'
      }}>
       My Payment Options
      </Typography>
     <Grid container  mt={1}>
        <Grid item xs={12} >
        <Card sx={{
            borderRadius:0,
            paddingTop:'95px',
            paddingBottom:'179px',
            textAlign:'center'
        }} >
            <Typography>
            <PaymentIcon sx={{
                     color:'#dadada' ,
                     fontSize:'75px'
                }}/>
            </Typography>
            <Typography sx={{
                fontSize:'14px',
                color:'#757575'
               
            }}>
               
            No payment options
            </Typography>
        </Card>

        </Grid>

     </Grid>
   </>
  )
}

export default PaymentOption