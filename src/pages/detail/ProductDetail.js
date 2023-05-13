import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState('black');
    const [quantity, setQuantity] = useState(1);
    const productImages = {
        black: "https://static-01.daraz.pk/p/44597d89eb506f9bf710fd6080f80874.jpg_720x720.jpg_.webp",
        white: 'https://static-01.daraz.pk/p/6db245f354bc39b01db42e7053b65cf7.jpg_720x720.jpg_.webp',
        red: 'https://static-01.daraz.pk/p/ed03b10a57a4c5d5568b111e28409f28.jpg_720x720.jpg_.webp',
        green: 'https://static-01.daraz.pk/p/687db865e309194560eb214fc546048b.jpg_720x720.jpg_.webp'
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    const handleQuantityChange = (newQuantity) => {
        setQuantity(Math.max(1, newQuantity)); // Prevent quantity from going below 1
    };

    const handleIncreaseQuantity = () => {
        handleQuantityChange(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        handleQuantityChange(quantity - 1);
    };
    return (

        <div style={{
            background: '#eff0f5',
            paddingTop: '50px',
            paddingBottom: '100px'

        }}>
            <Typography variant='body2' textAlign={"center"} >Home / product /AirPods</Typography> <br />
            <Box sx={{
                background: 'white',
                width: {
                    xs: '95%',
                    md: '60%',
                },
                mx: 'auto',
                padding: '20px 10px'

            }}>
                <Grid container spacing={2} >

                    <Grid item lg={4} xs={12} sm={6} md={4} >
                        <Box sx={{
                            height: '330px',
                            width: '330px',

                        }}>
                            <img src={productImages[selectedColor]}
                                style={{ height: "auto", width: "100%", cursor: 'pointer' }} alt="detail" />
                        </Box>

                        <Box mt={2} display="flex" gap={1}>
                            {Object.keys(productImages).map((color) => (
                                <Box
                                    key={color}
                                    sx={{
                                        height: "70px",
                                        width: "70px",
                                        borderRadius: "50%",

                                        position: "relative",
                                    }}
                                    onMouseEnter={() => handleColorChange(color)}
                                >
                                    <img
                                        src={productImages[color]}
                                        alt="data"
                                        style={{ height: "100%", width: "100%", cursor: 'pointer' }}
                                    />
                                    {selectedColor === color && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                height: "100%",
                                                width: "100%",
                                                cursor: 'pointer'

                                            }}
                                        ></Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={6} md={6}>

                        <Typography variant='h5' textAlign={"justify"} sx={{
                            color: '#212121',
                            fontSize: {
                                sm: '20px',
                                xs: '14px'
                            }, paddingBottom: '10px'
                        }} >
                            Original M10 & M90 TWS Wireless Earphones Touch Control 5.1
                            with power bank charger Headset Waterproof 9D Hifi Quality Earbuds 2000mAh
                            Stereo Sports Headphones With Microphone
                        </Typography>
                        <Typography alignItems={"center"}>
                            <Rating name="size-small" defaultValue={3} readOnly size="small" /> <span style={{
                                color: '#1a9cb7'
                            }}>115 Ratings | 73 Answered Questions</span>
                        </Typography>
                        <Typography mt={2}>
                            Brand: <span style={{
                                color: '#1a9cb7'
                            }}>No Brand | More Audio from No Brand</span>
                        </Typography>
                        <Divider></Divider>
                        <Typography sx={{ color: '#f85606', fontSize: '25px' }} mt={2}>
                            Rs. 1,599
                        </Typography>
                        <Typography>
                            <del style={{
                                marginRight: '5px',
                                color: '#9e9e9e'
                            }}>Rs. 7,000 </del>-77%
                        </Typography>



                        <Divider sx={{ marginBottom: 2 }} />
                        <Stack direction={"row"} spacing={3} alignItems={"center"}>
                            <Typography>
                                Quantity
                            </Typography>
                            <Button onClick={handleDecreaseQuantity} disabled={quantity === 1}
                                sx={{
                                    width: ' 32px',
                                    height: ' 32px',
                                    borderRadius: 0,
                                    color: '#9e9e9e',
                                    background: '#eff0f5',
                                    ":hover":
                                    {
                                        background: '#eff0f5',
                                    }
                                }}
                            >
                                <Remove />
                            </Button>
                            <Typography
                                sx={{ mx: 1 }}>{quantity}</Typography>
                            <Button onClick={handleIncreaseQuantity} sx={{
                                width: ' 32px',
                                height: ' 32px',
                                borderRadius: 0,
                                color: '#9e9e9e',
                                background: '#eff0f5',
                                ":hover":
                                {
                                    background: '#eff0f5',
                                }
                            }}>
                                <Add />
                            </Button>
                        </Stack>


                        <Divider sx={{ marginBottom: 2, marginTop: 2 }} />

                        <Stack direction={"row"} spacing={2} alignItems={"center"} justifyItems={"center"}>
                        <NavLink to={"/order"} style={{textDecoration:"none"}}>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    width:{xs:"160px",sm:"180px",md:"150px",lg:"180px",xl:"250px"},

                                    height: '48px',
                                    fontSize: '14px',
                                    borderRadius: 0,
                                    lineHeight: '46px',
                                    bgcolor: '#2abbe8',
                                    ":hover": {
                                        bgcolor: '#2abbe8',
                                    }
                                }} >
                                Buy Now
                            </Button>
</NavLink>
                      <NavLink to={"/cart"} style={{textDecoration:"none"}}>
                 
                  <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{

                                   width:{xs:"160px",sm:"180px",md:"150px",lg:"180px",xl:"250px"},
                                    height: '48px',
                                    borderRadius: 0,
                                    fontSize: '14px',

                                    lineHeight: '46px',
                                    bgcolor: '#f57224',
                                    ":hover": {
                                        bgcolor: '#f57224',
                                    }
                                }} >
                                Add to Cart
                            </Button>
      
                      </NavLink>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>


            {/* detail bottom */}

            <Grid>
                <Grid container sx={{
                    width: { lg: "60%", md: "80%", sm: "95%", xs: "95%" }, backgroundColor: "white", padding: "20px", mx: { lg: "auto", xs: "auto" }, mt: "30px",
                    justifyContent: "space-between"
                }}>
                    <Grid item sx={{ fontSize: "25px" }} ><b>Details</b></Grid>

                </Grid>
                <Grid spacing={4} container sx={{ width: { lg: "60%", xs: "95%", md: "80%", sm: "95%" }, backgroundColor: "white", mx: "auto" }} >

                    <Grid item lg={5} md={6} sm={6} xs={12} >
                        <Typography><b>ABOUT PRODUCTS</b></Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body,
                            adjustable straps, scoop neckline, ruffled hems, and a cropped fit.
                        </Typography><br />
                        <Typography ><b>ADVANTAGES</b></Typography>
                        <ul style={{ fontSize: "14px" }}>
                            <li>Smocked body</li>
                            <li>Adjustable straps</li>
                            <li>Scoop neckline</li>
                            <li>Ruffeled hems</li>
                            <li>Cropped length</li>
                            <li>Model is wearing a small</li>
                            <li>100% rayon</li>
                            <li>Machine washable</li>
                        </ul>
                        <Typography><b>DISADVANTAGES</b></Typography>
                        <ul style={{ fontSize: "14px" }}>
                            <li>Smocked body</li>
                            <li>Adjustable straps</li>
                            <li>Scoop neckline</li>
                        </ul>
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={12} >
                        <Typography><b>SHIPPING</b></Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            SHIPPING
                            We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia. The minimum order value must be $75 before taxes,
                            shipping and handling. Shipping fees are non-refundable.
                        </Typography> <br />
                        <Typography sx={{ fontSize: "14px" }} >
                            Please allow up to 2 business days (excluding weekends, holidays, and sale days) to process your order.
                        </Typography> <br />
                        <Typography sx={{ fontSize: "14px" }}>
                            Processing Time + Shipping Time = Delivery Time
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>


        </div>
    )
}

export default ProductDetail