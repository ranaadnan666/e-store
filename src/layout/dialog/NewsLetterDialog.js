import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
function NewsLetterDialog(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    

    <Typography mt={2} sx={{
        color: '#1a9cb7',
        cursor: 'pointer',
      }} onClick={handleOpen}>
       {props.title}
      </Typography>
    <Dialog open={open} borderRadius={0} >
              <Box sx={{
                paddingLeft:'10px',
                paddingRight:'10px'
              }}>
            
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <DialogTitle>Newsletter Subscription</DialogTitle>
              <CloseIcon onClick={handleClose}  sx={{marginRight:'10px' ,fontSize:'30px',  color: "#757575",cursor:'pointer'}}/>
              </Stack>
            
              <DialogContent>
                <Typography>
                  I have read and understood <span style={{
                    color: '#1a9cb7'
                  }}>Privacy Policy</span>
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant="contained" sx={{
                  color:'#757575',
                  borderRadius:0,
                  background:'#eff0f5',
                  height:'40px',
                  borderColor:'#dadada',":hover":{
                    background:'#eff0f5',
                    borderColor:'#dadada'
                  }
                
                }}>Cancel</Button>
                <Button onClick={handleClose} variant="contained"  sx={{
                  borderRadius:0,
                  background:' #2abbe8',
                  height:'40px',
                ":hover":{
                    background:' #2abbe8',
                    borderColor:' #2abbe8',
                    
                  }
                  }} >Subscribe</Button>
              </DialogActions>
              </Box>
            </Dialog>
    </>
  )
}

export default NewsLetterDialog

// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

// function NewsLetterDialog({ open, onClose }) {
//   const handleClose = () => onClose(false);

//   return (
//     <>
//     <Dialog open={open} borderRadius={0}>
//       <Box sx={{
//         paddingLeft:'10px',
//         paddingRight:'10px'
//       }}>
//         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
//           <DialogTitle>Newsletter Subscription</DialogTitle>
//           <CloseIcon onClick={handleClose} sx={{marginRight:'10px', fontSize:'30px', color: "#757575", cursor:'pointer'}} />
//         </Stack>
//         <DialogContent>
//           <Typography>
//             I have read and understood <span style={{ color: '#1a9cb7' }}>Privacy Policy</span>
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} variant="contained" sx={{
//             color:'#757575',
//             borderRadius:0,
//             background:'#eff0f5',
//             height:'40px',
//             borderColor:'#dadada',
//             ":hover":{
//               background:'#eff0f5',
//               borderColor:'#dadada'
//             }
//           }}>Cancel</Button>
//           <Button onClick={handleClose} variant="contained" sx={{
//             borderRadius:0,
//             background:' #2abbe8',
//             height:'40px',
//             ":hover":{
//               background:' #2abbe8',
//               borderColor:' #2abbe8',
//             }
//           }}>Subscribe</Button>
//         </DialogActions>
//       </Box>
//     </Dialog>
//     </>
//   )
// }

// export default NewsLetterDialog