import {   Container, Grid, LinearProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import ProductContext from '../providers/ProductContext';
import { fetchProducts } from '../providers/ProductActions';

const Products = () => {

 const {products , dispatch} = useContext(ProductContext)

const getProducts = async()=>{
  const products = await fetchProducts()
  dispatch({
    type : "FETCH_PRODUCTS",
    payload : products,
  })

}


 useEffect(() => {
   getProducts()
 },[]);



  return (
    
    <Container>
      <Grid container spacing={2}>
      {
        products.map(product => <ProductCard key={product.id} product={product}/>)
      }
      
       
      </Grid>
    </Container>
  )
}

export default Products;
