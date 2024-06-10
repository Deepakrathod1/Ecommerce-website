import { AppBar, Button,   Toolbar,   Typography,   } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../providers/cart/CartContext';

const Navbar = () => {

  const {cartItems} = useContext(CartContext)

  return (
    <AppBar >
      <Toolbar>
        
        <Typography  variant='h6' sx={{flexGrow:2}}>
        <Link to={"/"} >Material Store.</Link>
        
        </Typography> 
     
      <Link to={"/Cart"}> 
      <Badge badgeContent={cartItems.length} color="error">
       <Button variant='contained' size='small' color='success' >
     Cart <ShoppingCartIcon/>
        </Button>
        </Badge>
        </Link>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
