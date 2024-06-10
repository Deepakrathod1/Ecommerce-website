import { Container, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
  return (
    <Container sx={{padding : "80px 0px"}}>
      <Typography variant='h3' align='center' color={"error"}>
        404 page not found!!
      </Typography>
      
    </Container>
  )
}

export default PageNotFound;
