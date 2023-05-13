import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import saledata from "../../component/home/flashsale/Data";
import { Link } from "react-router-dom";
import BasicCard from "../../layout/basiccard/BasicCard";

function Product() {
  return (
    <div
      style={{
        background: "#eff0f5",
        padding: "30px 0px",
      }}
    >
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
          component={"h3"}
          sx={{
            color: "#424242",
            fontFamily: "Roboto-Regular",
            fontSize: "22px",
            textAlign: "center",
            fontWeight: 600,
            marginBottom: 2,
          }}
        >
          All Prodcts
        </Typography>

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

        <Grid container sx={{ width: "98%", mx: "auto" }} spacing={2} mt={2}>
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
    </div>
  );
}

export default Product;
