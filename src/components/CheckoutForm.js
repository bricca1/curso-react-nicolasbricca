import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useCart } from './CartContext';
import {Typography}	 from '@mui/material';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { display } from '@mui/system';


export default function CheckoutForm() {
    const {cart, addItemToCart, removeItem, clearCart, getTotalPrice} = useCart()
    const myOrder = (e) => {
        const order =    { 
                buyer: {
                    name: e.target.name.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value
                },
                items: cart,
                total: getTotalPrice()
            };
            const db = getFirestore()
            const ordersCollection = collection(db, 'orders');
            addDoc(ordersCollection, order).then(({id}) => setOrderId(id))  
        }

    useEffect(() => {
      
    }, [])
  return (
    <Grid container xs={12} sx={{display:'flex', alignItems:'center', }}>
        <Grid item xs={12}>

            <Typography variant="h6" >
                Subtotal De Su Compra
            </Typography>
            <Typography variant="subtitle1" >
                $ {getTotalPrice()}
            </Typography>
            <TextField id="name"  name="name"  label="Nombre y Apellido" variant="standard" required />
            <TextField id="phone" name="email" label="Telefono" variant="standard" required type={'number'}/>
            <TextField id="email" name="phone" label="Email" variant="standard" required />
            <Button variant='contained' onClick={myOrder} >Terminar Compra</Button>            
        </Grid>

    </Grid>


  )
}
