
import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CommentSharpIcon from '@mui/icons-material/CommentSharp';
import {  Divider, Stack,Grid } from "@mui/material";
import Sidebar from './left/Sidebar';
import Body from './right/Body';
import Head from './right/Head';
import Foot from './right/Foot';
const drawerBleeding = 0;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            width:"70%",
            height: '70%',
            overflow: 'visible',
            borderRadius: '0 0 8px 0',
            position: 'fixed',
            bottom: 0,
            left: "0",
          },
        }}
      />
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}> */}
        <Button variant="contained" startIcon={<CommentSharpIcon />} onClick={toggleDrawer(true)}>
          Message
        </Button>
      {/* </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            // position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Grid
        container
        padding={"20px 0px"}
        width={{ xs: "100%", sm: "90%", md: "95%" }}
        mx="auto"
        height="86vh"
      >
        <Sidebar/>

        <Grid
          display={{xs:"none" , md: 'block' }}
          item
          xs={12}
          sm={12}
          md={7}
          p={{ xs: "5px", md: "20px" }}
          border="1px solid silver"
        >
          {/* main area */}
          {/* {activeChatUser ? */}
          <Stack
            direction={"column"}
            justifyContent="space-between"
            height="100%"
          >
            <div>
              <Head />
              <Divider />
              <Body/>
            <Box sx={{mt:{xs:0,xl:32}}}><Foot /></Box>
            </div>
          </Stack>
          {/* : "none"} */}
        </Grid>
      </Grid>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;