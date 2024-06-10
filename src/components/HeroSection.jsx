import React from 'react'
import Wave from './Wave'
import { Box, Button, Container, Typography } from '@mui/material'
import HeroImage from "../assets/image.png";
const HeroSection = () => {

    const customStyle = {
        padding: "60px 0px",
         display: "flex", 
         alignItems: "center" ,
          justifyContent : "space-around" ,
          minheight : "60vh",
          flexwrap: "wrap",
    }

  return (
  <Container>
      <Box sx={customStyle}>
    <Wave/>
 <Box>
 <Typography sx={{margin : "10px 0px"}} variant='h2'>Shop Aything Anytime..</Typography>
 <Typography sx={{margin : "10px 0px"}} variant='body2'>You Can Shop Anything From Anywhere 24/7</Typography>
 <Button sx={{margin : "10px 0px"}} variant='outlined' color='primary'>Shop Now</Button>
 </Box>
 <Box><img style={{height: "350px", top: 10 }} src={HeroImage}/>
 </Box>
</Box>
  </Container>
  )
}

export default HeroSection;
