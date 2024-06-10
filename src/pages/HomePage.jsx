import React, { useContext, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { Container, LinearProgress, Typography } from '@mui/material';
import Products from '../components/Products';
import ProductContext from '../providers/ProductContext';


const HomePage = () => {

const {products , dispatch} = useContext(ProductContext);

useEffect(()=>{
  dispatch({
    type: "RESET_PRODUCT_STATE",
  });
},[])


  if(products.length === 0){
    <Container sx={{padding : "80px 0px"}}>
      <LinearProgress/>
    </Container>
   }


  return (
    <div>
      <HeroSection/>

      <Typography sx={{margin : "20px 0px"}} variant='h4' align='center'>
        products
      </Typography>

      <Products/>
    </div>
  )
}

export default HomePage;



