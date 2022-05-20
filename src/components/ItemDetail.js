import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'


export default function ItemDetail({item}) {
   
  return (
    <div>
      <Paper>
        <img></img>
        <h1>{item.tittle}</h1>
        <h2>{item.price}</h2>
        <h3>{item.description}</h3>
        <Button variant="contained">Agregar al Carrito</Button>
      </Paper>
    </div>

  )
}
