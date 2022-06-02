import {React, useState} from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'



export default function ItemCount({stock, initial, onAdd, item}) {
    const { addItemToCart, removeItem, clearCart} = useCart()
    const [count, setCount] = useState(initial)
  return (
        <Grid container>
            <Grid item>
                <ButtonGroup disableElevation variant="contained">
                <Button onClick={ () => count > 0 ? setCount(count - 1) : count }>-</Button>
                <h3>{count}</h3>
                <Button onClick={ () => stock > count ? setCount(count + 1) : count} disabled={stock === 0}>+</Button>
                <Link to={`/cart`}><Button onClick={()=> addItemToCart(item, count)}>Terminar mi compra </Button></Link>
                </ButtonGroup>
            </Grid>
        </Grid>


  );
}
