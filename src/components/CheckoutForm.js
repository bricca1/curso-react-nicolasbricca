import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useCart } from './CartContext';
export default function CheckoutForm() {
  return (
    <Grid container>
        <Grid item>
            <TextField id="standard-basic" label="Nombre" variant="standard" required />
            <TextField id="standard-basic" label="Telefono" variant="standard" required type={'number'}/>
            <TextField id="standard-basic" label="Email" variant="standard" required />
            <Button variant='contained'>Terminar Compra</Button>            
        </Grid>

    </Grid>


  )
}
