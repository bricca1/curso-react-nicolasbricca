//@ts-check
import React from 'react'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'
import ItemCount from './ItemCount'
import { CardMedia } from '@mui/material';

export default function ItemDetail({ item }) {
  return (
    <div>
      <Paper>
        {/* <CardMedia component="img" sx={{width: 600, height: 300, paddingLeft: "5%" }} src={item.pictureURL}/> */}
        <h1>{ item?.tittle }</h1>
        <h2>{ item?.price }</h2>
        <h3>{ item?.description }</h3>
        <ItemCount stock={4} initial={1} onAdd  />
      </Paper>
    </div>

  )
}
