import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NewsLetterDialog from "../../layout/dialog/NewsLetterDialog";

const Profile = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <h4>My profile</h4>
      <div style={{ backgroundColor: "white", padding: "20px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          textAlign={"left"}
        >
          <Stack rowGap={{ xs: 0, sm: 2 }}>
            <lable>Full Name</lable>
            {value ? (
              <input
                style={{
                  padding: "5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                }}
                type="text"
                placeholder="Enter your name"
              />
            ) : (
              <span>Adnan</span>
            )}
          </Stack>
          <Box>
            <lable>Email Address</lable>
            <p>Adnan@magzel.com</p>
          </Box>
          <Box>
            <lable>Mobile</lable>
            <p>Please enter mobile number </p>
          </Box>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} gap={{ xs: 0, sm: 14 }}>
          <Stack direction={"column"} rowGap={{ xs: 0, sm: 2 }}>
            <lable>Birthday</lable>
            {value ? (
              <Stack direction={"ROW"} gap={{ xs: 0.5, sm: 1 }}>
                <select style={{ padding: "5px", borderRadius: "5px" }}>
                  <option value="all">select Months</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                </select>
                <select style={{ padding: "5px", borderRadius: "5px" }}>
                  <option value="">select Days</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                  <option value="31">31</option>
                </select>
                <select
                  name="year"
                  id="year"
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  <option value="2022">select years</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </Stack>
            ) : (
              <span>Please enter your birthday</span>
            )}
          </Stack>
          <Stack textAlign={"left"} rowGap={2}>
            <lable>Gender</lable>

            {value ? (
              <>
                <select
                  style={{ padding: "5px", borderRadius: "5px" }}
                  name="year"
                  id="year"
                >
                  <option value="2022">Male</option>
                  <option value="2023">FeMale</option>
                </select>
              </>
            ) : (
              <span>Please enter your Gender</span>
            )}
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          rowGap={2}
          width={{ xs: "70%", sm: "50%", md: "30%" }}
          mt={{ xs: 4, sm: 12 }}
        >
          <NewsLetterDialog title={"Subscribe to our Newsletter"}/>

          {value ? (
            <Button
              onClick={() => {
                setValue(false);
              }}
              variant="contained"
            >
              Save
            </Button>
          ) : (
            <>
              <Button
                onClick={() => {
                  setValue(true);
                }}
                variant="contained"
              >
                Edit Profile
              </Button>

              <NavLink to={"/account/password"}>
                <Button sx={{ width: "100%" }} variant="contained">
                  change Password
                </Button>
              </NavLink>
            </>
          )}
        </Stack>
      </div>
    </>
  );
};

export default Profile;
