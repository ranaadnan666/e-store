import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Right() {
  return (
    <>
      <Card
        sx={{
          padding: "10px",
          borderRadius: "0px",
          border: "1px solid white",
        }}
      >
        <Typography>Discount and Payment</Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={2}
        >
          <Typography>Daraz Voucher</Typography>
          <Typography>No Applicable Voucher</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={2}
        >
          <Typography> Promo Code</Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            Enter Store/Daraz Code
            <ArrowForwardIosIcon />
          </Typography>
        </Stack>
        <Divider sx={{mt:"20px"}} />
        <Box component="form" mt={2}>
          Order Summary
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Typography>Items Total</Typography>
            <Typography>Rs. 1,430</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Typography>Delivery Fee</Typography>
            <Typography>Rs. 119</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Typography>Total Payment</Typography>
            <Typography>Rs. 1,549</Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            mt={2}
          >
           
            <Typography sx={{ color: "#f85606" }}>VAT included, where applicable</Typography>
          </Stack>
          <Button
            fullWidth
            sx={{
              height: "40px",
              borderRadius: "0px",
              bgcolor: "#f57224",
              marginTop: 3,
              color: "white",
              ":hover": {
                bgcolor: "#f57224",
              },
            }}
          >
            Place Order
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default Right;
