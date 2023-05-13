import { Box,  Card,   Grid,  Stack,  Typography } from '@mui/material'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import NewsLetterDialog from '../../layout/dialog/NewsLetterDialog';
function ManageAccount() {
  return (
    <div>
      <Typography mt={1} sx={{
        fontSize: '22px',
        fontWeight: 400,
        color: '#424242'
      }}>
        Manage My Account
      </Typography>

      <Grid container spacing={2} mt={1}>

        {/* ==========================  Personal Profile=================== */}
        <Grid item md={4} sm={4} xs={12}>
          <Card sx={{
            padding: '16px', borderRadius: 0,
            height: '200px'
          }}>
            <Typography component={'h6'} sx={{
              color: '#212121',
              height: '20px',
              fontSize: '14px',
              lineHeight: '20px',
              marginBottom: '16px',
              fontWeight: 600

            }}>
              Personal Profile /<span style={{ color: '#1a9cb7' }}> edit</span>
            </Typography>
            <Typography sx={{
              fontSize: '14px',
              marginBottom: '14px',
            }}>
              rizorizvi928
            </Typography>
            <Typography sx={{
              fontSize: '14px',
              marginBottom: '14px',
            }}>
              rizorizvi928@gmail.com
            </Typography>
            {/* Dialog */}

          <NewsLetterDialog title={"Subscribe to our Newsletter"}/>
     
          </Card>

        </Grid>


        {/* ===================== Address Book ============================== */}
        <Grid item md={8} sm={8} xs={12}>

          <Card sx={{
            padding: '16px', borderRadius: 0,
            height: '200px'
          }}>
            <Stack direction={{ sm: "row", xs: 'column' }} spacing={5}>

              <Box >
                <Typography component={'h6'} sx={{
                  color: '#212121',
                  height: '20px',
                  fontSize: '14px',
                  lineHeight: '20px',
                  marginBottom: '16px',
                  fontWeight: 600

                }}>
                  Address Book  /<span style={{ color: '#1a9cb7' }}> Add</span>
                </Typography>
                <Typography sx={{
                  fontSize: '12px',
                  marginBottom: '14px',
                }}>
                  Save your shipping address here
                </Typography>
                <Typography sx={{
                  fontSize: '14px',
                  marginBottom: '20px',
                }}>
                  <  RoomOutlinedIcon sx={{
                    color: '#757575',
                    fontSize: '40px'
                  }} />
                </Typography>
              </Box>

              <Box sx={{ borderLeft: '2px solid #eff0f5', height: '150px' }} >

              </Box>

              <Box>
                <Typography sx={{
                  fontSize: '12px',
                  marginBottom: '14px',
                  color: "#757575",
                  marginTop: 5
                }}>
                  Save your billing address here
                </Typography>

              </Box>
            </Stack>

          </Card>

        </Grid>

      </Grid>
    </div>
  )
}

export default ManageAccount