import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
            position: "absolute",
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

const AddAddress = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="addadress">
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New Delevry Address
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add New Delevry Address
        </BootstrapDialogTitle>
        <Box
          component={"form"}
          sx={{ padding: "20px", width: { xs: "300px", sm: "600px" } }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>Full Name</lable>
              <input
                style={{
                  padding: "7px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                }}
                type="text"
                placeholder="input full name"
                required
              />
            </Stack>
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>Address</lable>
              <input
                style={{
                  padding: "7px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                }}
                type="text"
                placeholder="house no/building/street"
                required
              />
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>Mobile Number</lable>
              <input
                style={{
                  padding: "7px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                }}
                type="text"
                placeholder="input mobile number"
                required
              />
            </Stack>
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>LandMark (Optional)</lable>
              <input
                style={{
                  padding: "7px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                }}
                type="text"
                placeholder="E.g brside train station"
                required
              />
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>Province</lable>
              {/* <input style={{padding:"7px",borderRadius:"10px",border:"1px solid gray"}} type="text" placeholder='input full name' required/> */}
              <select
                style={{
                  padding: "7px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                }}
              >
                <option value="all">Please choose your province</option>
                <option value="january">Punjab</option>
                <option value="february">sindh</option>
                <option value="march">gilgit</option>
              </select>
            </Stack>
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>Select a lable for effective delivery</lable>
              <Stack direction={"row"} columnGap={4}>
                <Box>
                  <input type="checkbox" /> <lable>Home</lable>
                </Box>
                <Box>
                  <input type="checkbox" /> <lable>Office</lable>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>City</lable>
              <select
                style={{
                  padding: "7px",
                  borderRadius: "10px",
                  border: "1px solid gray",
                }}
              >
                <option value="all">Please choose your city</option>
                <option value="january">lahore</option>
                <option value="february">multan</option>
                <option value="march">isb</option>
              </select>
            </Stack>
            <Stack width={{ xs: "100%", md: "45%" }} rowGap={1}>
              <lable>Default Address (Optional)</lable>
              <Stack
                borderRadius={"10px"}
                border={"1px solid gray"}
                p={1}
                direction={"column"}
                columnGap={4}
              >
                <Box>
                  <input type="checkbox" />{" "}
                  <lable>Default shipping address</lable>
                </Box>
                <Box>
                  <input type="checkbox" />{" "}
                  <lable>Default billing address</lable>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={{ xs: "100%", md: "45%" }}
            rowGap={1}
            mt={{ xs: "0", md: "-30px" }}
          >
            <lable>Area</lable>
            <select
              style={{
                padding: "7px",
                borderRadius: "10px",
                border: "1px solid gray",
              }}
            >
              <option value="january">lahore</option>
              <option value="february">multan</option>
              <option value="march">isb</option>
            </select>
          </Stack>
        </Box>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default AddAddress;
