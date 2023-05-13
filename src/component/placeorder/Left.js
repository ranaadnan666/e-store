import {
    Box,
    Card,
    CardContent,
    Grid,
    IconButton,
    Stack,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import RemoveIcon from "@mui/icons-material/Remove";
  import AddIcon from "@mui/icons-material/Add";
  import DeleteIcon from "@mui/icons-material/Delete";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddAddress from "../account/Dialog";
  
  function Left() {
    const [quantity, setQuantity] = useState(1);
  
    const handleAdd = () => {
      setQuantity(quantity + 1);
    };
  
    const handleRemove = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    // const cart = [

    //   {
    //     id: 2,
    //     Product_title:
    //       "Classic Couple Rings For Men Women CZ Stone Trendy Wedding Lovers' Ring Jewelry Romantic Valentine's Day Present Ring Accessory",
    //     Product_img:
    //       "https://static-01.daraz.pk/p/3d528712c6520dff1b85471c7690195c.jpg",
    //     Product_shortdisc: "o Brand, Ring Size:Adjustable, Color Family:Silver",
    //     Product_price: 300,
    //   },
    // ];
    return (
      <>
        <Grid container lg={12}>
          
          <Card   sx={{
             padding: '20px',
             marginBottom:4,
             width:'100%',
             borderRadius:'0px',
             border:'1px solid white'
          }}>
            <Stack alignItems={'center'} direction={"row"} justifyContent={"center"}>
            
           
           <AddAddress/>
            </Stack>
  
          </Card>
  
         
            <Grid item lg={12} xs={12}>
              <Card
                sx={{
                //   display: "flex",
                  padding: "5px 5px",
                  alignItems: "center",
                  borderRadius: "0px",
                  border: "1px solid white",
                }}
              >
          
  
                <CardContent  sx={{
                  display: "flex"}}>
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    padding:"10px",
                    mt:"10px"
                  }}
                >
                  <img
                    src={"https://static-01.daraz.pk/p/3d528712c6520dff1b85471c7690195c.jpg"}
                    alt="product"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: "0px" }}
                  />
                </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={10}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        sx={{
                          width: "320px",
                          height: "50px",
                          overflow: "hidden",
                          fontSize: "16px",
                          color: "#212121",
                        }}
                      >
                       Classic Couple Rings For Men Women CZ Stone Trendy Wedding Lovers' Ring Jewelry Romantic Valentine's Day Present Ring Accessory
                      </Typography>
  
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "12px",
                          marginTop: "5px",
                          color: "#757575",
                        }}
                      >
                     o Brand, Ring Size:Adjustable, Color Family:Silver
                      </Typography>
                    </Box>
  
                    <Box>
                      <Typography
                        sx={{ color: "#f85606", fontSize: "17px" }}
                        mt={2}
                      >
                        Rs. 300
                      </Typography>
                      <Typography>
                        <del
                          style={{
                            marginRight: "5px",
                            color: "#9e9e9e",
                          }}
                        >
                          Rs. 7,000{" "}
                        </del>
                        <br></br>-20%
                      </Typography>
                      <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <FavoriteBorderIcon sx={{ color: "#9e9e9e" }} />
                        <DeleteIcon sx={{ color: "#9e9e9e" }} />
                      </Stack>
                    </Box>
                    <Stack direction={"row"} alignItems="center" spacing={1}>
                      <IconButton
                        onClick={handleRemove}
                        sx={{
                          borderRadius: 0,
                          color: "#9e9e9e",
                          background: "#eff0f5",
                          ":hover": {
                            background: "#eff0f5",
                          },
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography
                        variant="body1"
                        width={"30px"}
                        textAlign={"center"}
                      >
                        {" "}
                        {quantity}
                      </Typography>
                      <IconButton
                        onClick={handleAdd}
                        sx={{
                          borderRadius: 0,
                          color: "#9e9e9e",
                          background: "#eff0f5",
                          ":hover": {
                            background: "#eff0f5",
                          },
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                </CardContent>
                <Stack width={"95%"} mx={"auto"} direction={"row"} justifyContent={"space-between"} >
             <Stack sx={{border:"1px solid gray",justifyContent:"space-between",width:"60%"}}direction={"row"} p={2}>
<span>Store Voucher</span>
<Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>Get Voucher<ArrowForwardIosIcon/></Box>
             </Stack>
             <Box width={"25%"}>
             1 Item(s). Subtotal:Rs. 1,549
             <br/>
             Saved Rs. 4,570
             </Box>
                </Stack>
              </Card>
              <br></br>
            </Grid>
    
        </Grid>
      </>
    );
  }
  
  export default Left;
  