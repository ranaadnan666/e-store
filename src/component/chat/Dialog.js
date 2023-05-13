import  React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CommentSharpIcon from '@mui/icons-material/CommentSharp';
import Grid from "@mui/material/Grid";
import {  Divider, Stack } from "@mui/material";
import Sidebar from './left/Sidebar';
import Body from './right/Body';
import Head from './right/Head';
import Foot from './right/Foot';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const MessageDialog=()=> {
  const [open, setOpen] = useState(false);
  const [mobilechat, setMobilechat] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   <Button   variant="contained" startIcon={<CommentSharpIcon />} onClick={handleClickOpen}>
        Message
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <Grid
        container
        padding={"20px 0px"}
        width={{ xs: "100%", sm: "90%", md: "95%" }}
        mx="auto"
        height="86vh"
      >
        <Sidebar/>

        <Grid
          display={{ xs: mobilechat ? 'block' : 'none', md: 'block' }}
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
            </div>
            <Foot />
          </Stack>
          {/* : "none"} */}
        </Grid>
      </Grid>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default MessageDialog