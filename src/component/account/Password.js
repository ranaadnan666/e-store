import { Box, Button, Stack } from "@mui/material";
import React from "react";

const ChangePass = () => {
  return (
    <>
      <h4>Change Password</h4>
      <Box sx={{ backgroundColor: "white" }} padding={4}>
        <Stack
          rowGap={1.5}
          sx={{ width: { xs: "100%", sm: "60%", lg: "50%", xl: "40%" } }}
        >
          <lable>Current Password</lable>
          <input
            style={{
              padding: "8px",
              borderRadius: "7px",
              border: "1px solid gray",
            }}
            type="text"
            placeholder="Please Enter your current password"
          />
          <lable>New Password</lable>
          <input
            style={{
              padding: "8px",
              borderRadius: "7px",
              border: "1px solid gray",
            }}
            type="text"
            placeholder="Please Enter your new password"
          />
          <lable>Confirm Password</lable>
          <input
            style={{
              padding: "8px",
              borderRadius: "7px",
              border: "1px solid gray",
            }}
            type="text"
            placeholder="Please Enter your confirm password"
          />
        </Stack>
        <Button sx={{ mt: 2 }} variant="contained">
          Save changes
        </Button>
      </Box>
    </>
  );
};

export default ChangePass;
