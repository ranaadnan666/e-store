import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, Grid, Tab, Typography } from "@mui/material";
import React from "react";
import Support from "./Support";
import FAQ from "./FAQ";

const HelpCenter = () => {

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (

    <Box mt={5}>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 600,
          color: "#424242",
          width: { xs: "95%", md: "70%" },
          mx: "auto",
        }}
      >
        Help Center
      </Typography>

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "100%",
          },
          mx: "auto",
          marginBottom: "50px",
          typography: "body1",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginBottom: 2,
              background: "white",
              width: { xs: "95%", md: "70%" },
            }}
            mx={"auto"}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="Home Page" value="1" />
              <Tab label="FAQ" value="2" />
            </TabList>
          </Box>
          {/* tab detail */}

          <TabPanel value="1" sx={{ padding: "0px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Card
                  sx={{
                    borderRadius: 0,

                    width: "100%",
                  }}
                >
                  <Support />
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="2" sx={{ padding: "0px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Card
                  sx={{
                    borderRadius: 0,
                    padding: "20px",
                    width: "100%",
                  }}
                >
                  <FAQ />
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default HelpCenter;
