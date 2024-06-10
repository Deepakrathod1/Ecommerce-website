import { Button, Card, Grid, Typography } from '@mui/material';
import React from 'react'

const PaymentCard = ({cartItems}) => {

    const total = cartItems.reduce((p,c)=> p+c.price , 0)



  return (
    <div>
       <Grid item sm={12} md={4} lg={4}>
                    <Card fullWidth sx={{width:'200px', marginTop:'40px',padding:'20px',marginLeft:'10px'}} >
                        <Typography  variant='h6' gutterBottom>Your Total :</Typography>
                        <Typography variant='h6' gutterBottom>Total Items :</Typography>
                        <Typography variant='h3' gutterBottom>${total}</Typography>
                        <Button
                         variant='contained'
                         fullWidth
                          color='success'>Pay Now</Button>
                    </Card>
                </Grid>
    </div>
  )
};

export default PaymentCard;
