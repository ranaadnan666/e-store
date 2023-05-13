import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";

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
        <Typography>Order Summary</Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={2}
        >
          <Typography>Subtotal (0 items)</Typography>
          <Typography>Rs. 0</Typography>
        </Stack>
        <Box component="form" mt={2}>
          <Stack direction={"row"} spacing={2}>
            <TextField
              required
              fullWidth
              placeholder="Enter Voucher Code"
              inputProps={{
                style: { fontSize: "14px" },
              }}
            />

            <Button
              sx={{
                background: "#25a5d8",
                borderRadius: "0px",
                width: "104px",
                color: "white",
                ":hover": {
                  background: "#25a5d8",
                },
              }}
            >
              Apply
            </Button>
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={2}
          >
            <Typography>Total</Typography>
            <Typography sx={{ color: "#f85606" }}>Rs. 0</Typography>
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
            PROCEED TO CHECKOUT (0)
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default Right;
