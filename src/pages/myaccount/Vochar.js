import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

function Vochar() {
    return (
        <div>
            <Typography sx={{
                fontSize: '22px',
                fontWeight: 400,
                color: '#424242'
            }}>
                Vouchers
            </Typography>

            <Grid container spacing={2} justifyContent="center" alignItems="center" mt={1}>
                <Grid item xs={12}>
                    <TableContainer component={Paper} sx={{
                        borderRadius:0
                    }}>
                        <Table aria-label="customized table">
                            <TableHead sx={{
                                background: '#fafafa',
                                color: 'white'
                            }}>
                                <TableRow >
                                    <TableCell sx={{
                                        color: '#757575'
                                    }}>Active</TableCell>
                                    <TableCell sx={{
                                         color: '#757575'
                                    }}>Uses</TableCell>
                                    <TableCell sx={{
                                         color: '#757575'
                                    }}>Voucher Code</TableCell>
                                    <TableCell sx={{
                                         color: '#757575'
                                    }}>
                                        Valid From
                                    </TableCell>
                                    <TableCell sx={{
                                         color: '#757575'
                                    }}>
                                        Valid Until
                                    </TableCell>
                                    <TableCell sx={{
                                         color: '#757575'
                                    }}>
                                       Value
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody mt={2} >
                               
                         <Box sx={{
                            paddingBottom:'50px',
                            paddingTop:'50px'
                         }}>

                       

                              <Typography sx={{
                                  textAlign:'center'
                              }}>
                              There are no vouchers yet
                              </Typography>
                              </Box>
                         


                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </div>
    )
}

export default Vochar