import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import categorydata from "./Data";

function Category() {
  return (
    <div>
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
          Categories
        </Typography>
        <Box
          sx={
            {
              // background: 'white',
            }
          }
        >
          <Grid container spacing={2}>
            {categorydata.map((item) => {
              return (
                <Grid item md={1.5} sm={3} xs={6}>
                  <Card
                    sx={{
                      borderRadius: "0px",
                      ":hover": {
                        boxShadow: 5,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        margin: "auto",
                      }}
                    >
                      <img
                        src={item.Product_img}
                        alt="category"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>

                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                      >
                        {item.Product_title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Category;
