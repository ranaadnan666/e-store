import {  Stack } from "@mui/material";
import React from "react";

import AddAddress from "./Dialog";
const Address = () => {
  return (
    <>
      <h4>Address book</h4>
      <Stack
        sx={{ backgroundColor: "white" }}
        height={{ xs: "20vh", md: "40vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <p>Save your delivery and billing address here.</p>
   
        <AddAddress />
      </Stack>
    </>
  );
};

export default Address;
