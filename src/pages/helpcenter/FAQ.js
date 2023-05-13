import React from "react";
import { Stack, Box } from "@mui/material";
const FAQ = () => {
  return (
    <Box sx={{ width: { xs: "95%", md: "70%" } }} mx={"auto"}>
      <h4>All Categories</h4>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        rowGap={2}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "45%" },
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <p>Promotions</p>
          Campaigns Big Bank Week Voucher Information
          <p>English Premier League 2022/2023</p>
        </Box>
        <Box
          sx={{
            width: { xs: "95%", md: "45%" },
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <p>Account Management</p>
          My Account Privacy & Security
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        mt={2}
        rowGap={2}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "45%" },
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <p>Daraz Categories</p>
          Daraz Like New Daraz Mall Daraz Bills Daraz Mart Daraz Fresh Daraz
          Seller Daraz Live Daraz Club Digital Goods Global Collection Fashion &
          Lifestyle
          <p>English Premier League 2022/2023</p>
        </Box>
        <Box
          sx={{
            width: { xs: "95%", md: "45%" },
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <p>Orders</p>
          Best Price Guaranteed Order Placement Order Management
        </Box>
      </Stack>
    </Box>
  );
};

export default FAQ;
