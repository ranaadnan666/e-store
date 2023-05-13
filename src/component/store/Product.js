import React from 'react'
import HoverRating from './Star'
import { Box, Stack } from '@mui/material'

const Product = () => {
  return (
    <>
            <h4 style={{textAlign:"center"}}>Product Ratings and Reviews (56)</h4>
     <Stack direction={"row"} justifyContent={"space-between"} p={{xs:1,md:4}}>
        <Box width={{xs:"20%",md:"10%"}}>
        <img style={{width:"100%"}} src='https://static-01.daraz.pk/p/ed03b10a57a4c5d5568b111e28409f28.jpg_720x720.jpg_.webp'/>
        </Box>
        <Box width={{xs:"75%",md:"85%"}}>
            <p>Blutooth Handfree Wireless Bluetooth Headset Good Quality Bluetooth Handsfree Earphone</p>
            <span>Color Family:Black</span>
            <HoverRating/>
            <p>Nice same as shown. Good battery life. Fast delivery compared to my previous purchases.</p>
            <Stack direction={"row"} columnGap={4} width={{xs:"100%",md:"50%"}}>
                <img style={{width:"30%"}} src='https://static-01.daraz.pk/p/44597d89eb506f9bf710fd6080f80874.jpg_720x720.jpg_.webp'/>
                <img style={{width:"30%"}} src='https://static-01.daraz.pk/p/6db245f354bc39b01db42e7053b65cf7.jpg_720x720.jpg_.webp'/>
                
            </Stack>
            <p>Qandeel R. - 29 Jan 2023Verified Purchase</p>
        </Box>
    </Stack>   
    </>
  )
}

export default Product