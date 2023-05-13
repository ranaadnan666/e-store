import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicCard from "../../../layout/basiccard/BasicCard";
import saledata from "./Data";
import { Link } from "react-router-dom";

function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = new Date("2023-05-03T00:00:00Z");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <>
      <Box
        sx={{
          width: {
            xs: "95%",
            md: "65%",
          },
          mx: "auto",
          paddingBottom: "50px",
        }}
      >
        <Typography
          sx={{
            color: "#757575",
            fontFamily: "Roboto-Regular",
            fontSize: "22px",
            textAlign: "center",
            fontWeight: 600,
            marginBottom: 2,
            marginTop: 5,
          }}
        >
          FlashSale
        </Typography>
        <Box
          sx={{
            background: "white",
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={5}
            alignItems={"center"}
            paddingLeft={"10px"}
          >
            <Typography
              sx={{
                color: "#f85606",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              On Sale Now
            </Typography>

            {/* timmer */}
            <Stack
              direction={"row"}
              color={"white"}
              spacing={2}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  color: " #202020",
                  fontSize: "14px",
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                Ending in
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#ff6801",
                  padding: "7px",
                  "& span": {
                    fontSize: "1rem",
                  },
                }}
              >
                <Typography variant="h6" component="span">
                  {timeLeft.hours}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ff6801",
                  padding: "7px",
                  "& span": {
                    fontSize: "1rem",
                  },
                }}
              >
                <Typography variant="h6" component="span">
                  {timeLeft.minutes}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ff6801",
                  padding: "7px",
                  "& span": {
                    fontSize: "1rem",
                  },
                }}
              >
                <Typography variant="h6" component="span">
                  {timeLeft.seconds}
                </Typography>
              </Box>
            </Stack>
          </Stack>
          {/* Divider */}
          <Divider sx={{ marginTop: 1, marginBottom: 2 }} />

          {/*  */}

          <Grid container sx={{ width: "98%", mx: "auto" }} spacing={2}>
            {saledata.map((item) => {
              return (
                <Grid item md={2.4} sm={6} xs={12}>
                  <Link
                    to="/detail"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <BasicCard
                      image={item.Product_img}
                      price={item.Product_price}
                      title={item.product_title}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default FlashSale;
