import React, {useEffect} from 'react'
import { useCart } from './CartContext'
import { Paper } from '@mui/material'
import { IconButton } from '@mui/material'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardMedia } from '@mui/material';
import { Route, Link, } from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
export default function Cart() {
  const {cart, addItemToCart, removeItem, clearCart, getTotalPrice} = useCart()
  useEffect(() => {
    
  }, [cart])
  
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    sx={{marginTop:'2.5rem'}}
    >
      <Paper sx={{width:'600px', height:'500px', justifyContent:'space-around', alignItems:'center'}}>
        <Grid item xs={6}>
          <div >{cart.length > 0 ? cart.map((item, key) => (
            <> 
              <CardMedia component="img" sx={{width: 600, height: 300 }} src={pictureURL}/>
              <h3>{item.product.tittle}</h3>
              <h3>{item.quantity}</h3>
              <Button variant="outlined" onClick={() => removeItem(item)} startIcon={<DeleteIcon />} />
            </>) ) : <>
            'No hay productos en el carrito'
            <Link to={`/`} ><Button>Volver al inicio</Button></Link>
            </>}
          </div>
          <div>{getTotalPrice()}</div>
        </Grid>
      </Paper>
      <Paper sx={{width:'400px', height:'500px'}}>
        <Grid item xs={6}>
          <CheckoutForm />
        </Grid>
      </Paper>

    </Grid>

       

 
   
  )
}
