import { Box, Card, CardContent,  Typography } from '@mui/material'
import React from 'react'

function BasicCard(props) {
    return (
        <>
            <Card sx={{
                ":hover": {
                    boxShadow: 5,
                    cursor: 'pointer'
                }
            }}>
                
                <Box
                 sx={{
                    width: '200px',
                    height: '188px',
                    margin: 'auto'
                }}>
                    <img src={props.image} alt="category" style={{ width: '100%', height: 'atuo' }} />

                </Box>
                <CardContent>
                    <Typography sx={{
                        height: '36px',
                        lineHeight: '18px',
                        overflow: 'hidden',
                        fontSize: '14px'
                    }}>
                        {props.title}
                    </Typography>
                    <Typography sx={{ color: '#f85606', fontSize: '18px' }}>
                        Rs.{props.price}
                    </Typography>
                    <Typography>
                       <del style={{
                        marginRight:'5px',
                        color:'#9e9e9e'
                       }}>Rs. 7,000 </del>-77%
                       </Typography>
                    <Typography>
                        {props.rating}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default BasicCard