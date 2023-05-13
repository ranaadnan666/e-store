import { Grid, Box, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "white", color: "black" }}>
        <Grid
          container
          spacing={4}
          width={"90%"}
          mx={"auto"}
          borderBottom={"1px solid white"}
          padding={"10px 0px"}
        >
          {/* logo */}
          <Grid item md={2.4} xs={12}>
            <Typography
              sx={{
                fontSize: "24px",
                color: "#1e1e27",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Fashion{" "}
              <span
                style={{
                  color: "#fe4c50",
                }}
              >
                {" "}
                Cube
              </span>
            </Typography>
          </Grid>

          <Grid item md={2.4} xs={6}>
            <h4>Feature</h4>
            <Stack direction={"column"} spacing={0.2} sx={{ color: "black" }}>
              <p>Mens</p>
              <p> Womens</p>
              <p>Boys</p>
              <p> Girls</p>
              <p> New Arrivals</p>
              <p>Shoes</p>
              <p> Cothes</p>
              <p> Accessories</p>
            </Stack>
          </Grid>
          <Grid item md={2.4} xs={6}>
            <h4>Menu</h4>
            <Stack direction={"column"} spacing={0.2} sx={{ color: "black" }}>
              <p> About Us</p>
              <p> Contact Us</p>
              <p>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  My Account
                </Link>
              </p>
              <p> Order History</p>
              <p>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  My Wishlist
                </Link>
              </p>
              <p>Blog</p>
              <p> Login</p>
            </Stack>
          </Grid>
          <Grid item md={2.4} xs={6}>
            <h4>Contact Us</h4>
            <Stack direction={"column"} spacing={0.2} sx={{ color: "black" }}>
              <h4
                style={{
                  color: "black",
                }}
              >
                Address:
              </h4>
              <p
                style={{
                  marginTop: "-14px",
                }}
              >
                123 street name City England
              </p>

              <h4
                style={{
                  color: "black",
                }}
              >
                Phone:
              </h4>
              <p>(123) 456-7890</p>

              <h4
                style={{
                  color: "black",
                }}
              >
                Email:
              </h4>
              <p>email@example.com</p>

              <h4
                style={{
                  color: "black",
                }}
              >
                Working Days/Hours
              </h4>
              <p>Mon-Sun/9:00AM-8:00PM</p>
            </Stack>
          </Grid>
          <Grid item md={2.4} xs={6}>
            <h4>Follow us</h4>
            <Stack direction={"column"} spacing={0.5} sx={{ color: "black" }}>
              <Stack direction="row" alignItems="center" spacing={4}>
                <FacebookIcon sx={{ color: "black" }} />
                Facebook
              </Stack>

              <Stack direction="row" alignItems="center" spacing={4}>
                <TwitterIcon sx={{ color: "black" }} />
                Twitter
              </Stack>

              <Stack direction="row" alignItems="center" spacing={4}>
                <InstagramIcon sx={{ color: "black" }} />
                Instagram
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
