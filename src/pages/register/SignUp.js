import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
function SignUp() {

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleDayChange = (event) => {
        setDay(event.target.value);
    };
    return (
        <div style={{
            background: '#eff0f5',
            paddingBottom:'30px'

        }}>

            <Box sx={{
                width: { xs: '95%', md: '50%' },
                mx: 'auto',
                pt: 10,
                pb: 5,

            }}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography sx={{
                        fontSize: '22px',
                        color: '#424242',
                        fontWeight: 400
                    }}>
                        Create your Fashion Account

                    </Typography>
                    <Typography sx={{
                        display: {
                            xs: 'none', md: 'block'
                        }
                    }}>
                        Already member? <Link style={{ color: '#049cb9' }} to="/login"> Login</Link> here
                    </Typography>
                </Stack>

                <Box mt={4} sx={{
                    background: 'white',
                    padding: '20px 0px',
                    border: "1px solid #BEBEBE",
                }} component="form" >
                    <Grid container sx={{ width: '90%' }} mx={"auto"} spacing={3}>
                        <Grid item md={6} xs={12}>
                            <Box>
                                <label>Phone Number*</label>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder='Please enter your Phone Number '
                                    inputProps={{
                                        style: { fontSize: '14px' }
                                    }}
                                    id=" number "
                                    name="number"
                                    autoComplete="number"
                                />
                                <Box mt={4}>
                                    <Stack direction={"row"} alignItems={"center"}>
                                        <KeyboardDoubleArrowRightIcon sx={{
                                            color: 'white',
                                            boxShadow: '0 4px 9px 0 #00eaaf',
                                            background: 'linear-gradient(90deg,#17ca9d,#02af83)',
                                            height: ' 50px',
                                            width: '40px',
                                            fontSize: '12px',
                                            fontWeight: 'bold'
                                        }} />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{

                                                color: '#11c296',
                                                height: '48px'
                                                , fontSize: '14px',
                                                borderWidth: '1px',
                                                lineHeight: '46px',
                                                bgcolor: '#d4f3eb',
                                                ":hover": {
                                                    bgcolor: '#d4f3eb',
                                                }
                                            }} >
                                            Slide to get SMS Code
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>

                            <Box mt={4}>
                            <label >Password*</label><br></br>
                                <FormControl variant="outlined" fullWidth>
                                   
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                       placeholder='Minimum 6 characters with a number and a letter'
                                       inputProps={{
                                        style: { fontSize: '14px' }
                                    }}
                                    />
                                </FormControl>
                            </Box>
                            <Box mt={4}>

                                <Typography>
                                    Birthday*
                                </Typography>
                                <Stack direction={"row"} >
                                    {/* month */}
                                    <FormControl fullWidth placeholder="Month">
                                        <InputLabel id="month-label">Month</InputLabel>
                                        <Select
                                            labelId="month-label"
                                            id="month"
                                            value={month}
                                            label="Month"
                                            onChange={handleMonthChange}
                                        >
                                            <MenuItem value={1}>January</MenuItem>
                                            <MenuItem value={2}>February</MenuItem>
                                            <MenuItem value={3}>March</MenuItem>
                                            <MenuItem value={4}>April</MenuItem>
                                            <MenuItem value={5}>May</MenuItem>
                                            <MenuItem value={6}>June</MenuItem>
                                            <MenuItem value={7}>July</MenuItem>
                                            <MenuItem value={8}>August</MenuItem>
                                            <MenuItem value={9}>September</MenuItem>
                                            <MenuItem value={10}>October</MenuItem>
                                            <MenuItem value={11}>November</MenuItem>
                                            <MenuItem value={12}>December</MenuItem>
                                        </Select>
                                    </FormControl>

                                    {/* day */}

                                    <FormControl fullWidth>
                                        <InputLabel id="day-label">Day</InputLabel>
                                        <Select 
                                            labelId="day-label"
                                            id="day"
                                            value={day}
                                            label="Day"
                                            onChange={handleDayChange}
                                        >
                                            {Array.from({ length: 31 }, (_, i) => i + 1).map((num) => (
                                                <MenuItem key={num} value={num} sx={{ fontSize:'12px' }}>{num}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    {/* year */}

                                    <FormControl fullWidth >
                                        <InputLabel id="year-label">Year</InputLabel>
                                        <Select
                                            labelId="year-label"
                                            id="year"
                                            value={year}
                                            label="Year"
                                            onChange={handleYearChange}
                                        >
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2022}>2022</MenuItem>
                                            <MenuItem value={2023}>2023</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Box>
                            <Box mt={4}>

                                <Typography>
                                    Gender*
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="gender-label">Gender</InputLabel>
                                    <Select
                                        labelId="gender-label"
                                        id="gender"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleGenderChange}
                                    >
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>


                        </Grid>
                        <Grid item md={6} xs={12}>


                            <Box >
                                <label >Full name*</label>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder='Enter your first and last name'
                                    inputProps={{
                                        style: { fontSize: '14px' }
                                    }}
                                    name="fullname"
                                    type="fullname"
                                    id="fullname"
                                    autoComplete="fullname"
                                />
                            </Box>

                            <FormControlLabel sx={{ marginTop: 4 }}
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I'd like to receive exclusive offers and promotions via SMS"
                            />


                            <Button

                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    height: '48px'
                                    , fontSize: '14px',
                                    borderWidth: '1px',
                                    lineHeight: '46px',
                                    bgcolor: '#f57224',
                                    ":hover": {
                                        bgcolor: '#f57224',
                                    }
                                }} >
                                Sign Up
                            </Button>
                            <Typography>
                                By clicking “SIGN UP”, I agree to Daraz's
                                <Link style={{ color: '#049cb9' }} > Terms of Use</Link>
                                and
                                <Link style={{ color: '#049cb9' }} > Privacy Policy</Link>

                            </Typography>
                            <Typography mt={2}>
                                Or, sign up with
                            </Typography>
                            <Stack direction={"row"} spacing={2} alignItems={"center"} justifyItems={"center"}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{

                                        height: '48px',
                                        fontSize: '14px',
                                        borderWidth: '1px',
                                        lineHeight: '46px',
                                        bgcolor: '#3b5998',
                                        ":hover": {
                                            bgcolor: '#3b5998',
                                        }
                                    }} >
                                    <FacebookIcon sx={{ marginRight: '5px' }} />  Facebook
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{


                                        height: '48px'
                                        , fontSize: '14px',
                                        borderWidth: '1px',
                                        lineHeight: '46px',
                                        bgcolor: '#d34836',
                                        ":hover": {
                                            bgcolor: '#d34836',
                                        }
                                    }} >
                                    < GoogleIcon sx={{ marginRight: '5px' }} /> Google
                                </Button>
                            </Stack>

                        </Grid>



                    </Grid>


                </Box>

                <Typography sx={{
                    display: {
                        xs: 'block', md: 'none'
                    },
                    textAlign: 'center'
                }}>
                    Already member? <Link style={{ color: '#049cb9' }} to="/login"> Login</Link> here
                </Typography>
            </Box>
        </div>
    )
}

export default SignUp


