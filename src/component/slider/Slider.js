import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:require('../../images/slider/slide1.jpg'),
       color:'#859ba6'
    },
    {
        imgPath:require('../../images/slider/slide2.jpg'),
        color:'#6c826b'
    },
    {
        imgPath:require('../../images/slider/slide3.jpg'),
        color:'#fdffdc'
    },
    {
        imgPath:require('../../images/slider/slide4.jpg'),
        color:'#e4e2dd'
    },
    {
        imgPath:require('../../images/slider/slide5.jpg'),
        color:'#ffe591'
    },
    {
        imgPath:require('../../images/slider/slide6.jpg'),
        color:'#d6dcda'
    },
];

function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (

        <Box>
            <div style={{ position: "relative" }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div  style={{
                        background:step.color
                    }}>
                    <div key={step.label} style={{width:'80%',margin:'auto'}}>
                        {Math.abs(activeStep - index) <= 2 ? (
                         
                            <img src={step.imgPath} alt="rooms" style={{ width: '100%', height: 'auto' }} />
                        
                        ) : null}
                    </div>
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div style={{
                        position: "absolute",
                          color: "white",
                         bottom: "5%",
                         width: '100%',
                       
                    
                     }}
                    >
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                        sx={{
                            backgroundColor: 'rgba(33, 25, 25, 0.001)',
                            justifyContent:'center',
                            '& .MuiMobileStepper-dot': {
                            
                                width: 12,
                                height: 12,
                            } ,
                            '& .MuiMobileStepper-dotActive': {
                                backgroundColor: 'white',
                              },
                       }}
                // nextButton={
                //     <Button
                //         size="small"
                //         onClick={handleNext}
                //         disabled={activeStep === maxSteps - 1}
                //         sx={{
                //             backgroundColor: "black", color: 'white', ":hover": {
                //                 backgroundColor: "black", color: 'white'
                //         }}}
                //     >
                //         Next
                //         {theme.direction === 'rtl' ? (
                //             <KeyboardArrowLeft />
                //         ) : (
                //             <KeyboardArrowRight />
                //         )}
                //     </Button>
                // }
                // backButton={
                //     <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{
                //         backgroundColor: "black", color: 'white', ":hover": {
                //             backgroundColor: "black", color: 'white'
                //         }
                //     }}>
                //         {theme.direction === 'rtl' ? (
                //             <KeyboardArrowRight />
                //         ) : (
                //             <KeyboardArrowLeft />
                //         )}
                //         Back
                //     </Button>
                // }
                />
                </div>
                </div>
        </Box>
    );
}

export default Slider; 