import React from 'react'
import {  Grid} from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../component/account/Sidebar'


const MainAccount = () => {
  return (
<div style={{background: '#EFF0F5',
        paddingTop:'50px',
        paddingBottom:'50px'}}>
<Grid container sx={{width:{xs:"95%",md:"65%"},mx:"auto"}} >
        <Grid item xs={12} sm={3}>
        <Sidebar/>
        </Grid>
        <Grid item xs={12} sm={9}>
            <Outlet/>
        </Grid>
    </Grid>
</div>
  )
}

export default MainAccount