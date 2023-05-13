import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import HoverRating from './Star';
import Product from './Product';
import Divider from '@mui/material/Divider';
const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Profile = () => {
  
  return (
    <Grid>
    <Stack direction={{xs:"column",md:"row"}} flexWrap={"wrap"} justifyContent={"space-between"} sx={{backgroundColor:"white",p:{xs:1,md:4}}}>
    <Box>
        <h4>Seller Size</h4>
        <SignalCellularAltIcon />
    </Box>
    <hr className='line'/>
    <Box>
        <h4>Joined </h4>
        <span style={{fontSize:"30px",fontWeight:"600"}}>1 </span><sup>+</sup><i>Year</i>
    </Box>
    <hr className='line'/>
    <Box width={{xs:"100%",xl:"20%"}}>
        <h4>Shipped on Time</h4>
        <span style={{fontSize:"30px",fontWeight:"550",color:"green"}}>91%</span><span >
this is average for sellers in same category</span>
    </Box> <hr className='line'/> <Box>
        <h4>Chat</h4>
        <span>Chat response rate</span><i>91%</i><br/>
        <span>Last Active</span> <span>active in hours</span>
    </Box>
    </Stack>
    <Stack direction={{xs:"column",md:"row"}} justifyContent={"space-between"} sx={{backgroundColor:"white "}} mt={3} p={{xs:1,md:4}}>
        <Box width={{xs:"100%",md:"30%"}}>
            <h4>Positive Seller Ratings</h4>
            <span>84%</span>
            <br/>
            <span>Positive Ratings</span>
            <p>Based on 1668 customer reviews</p>
        </Box>
        <Box width={"70%"}>
            <h4>Seller Ratings and Reviews (1398)</h4>
   
 <HoverRating/>
    <br/>
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
            <p>Panda �. - 11 hours agoVerified Purchase</p>

            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Box>
    </Stack>
    <Stack backgroundColor={"white"} mt={3} >
<Product/>
<Divider/>
<Product/>
<Divider/>
<Product/>

    </Stack>
</Grid>
  )
}

export default Profile