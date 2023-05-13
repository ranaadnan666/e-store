import { Box } from '@mui/material'
import React from 'react'
import SwipeableEdgeDrawer from './Bottombar'

const Chat = () => {
  return (
    
     
   <Box sx={{position:"fixed",bottom:"0",right:"150px"}}>
<SwipeableEdgeDrawer/>

   </Box>

  
  )
}

export default Chat