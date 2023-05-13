import { Button, Stack } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
           <Stack sx={{width:"100%",alignItems:"center"}}mt={12}>
     <p>There are no orders placed yet.</p><NavLink to={"/"}><Button variant='outlined'>Continue Shopping</Button></NavLink></Stack>
    </div>
  )
}

export default Shop