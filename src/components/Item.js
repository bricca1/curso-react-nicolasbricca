import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ItemCount from './ItemCount';
export default function Item({id, tittle, description, price, pictureURL }) {

    
  return (
      <List>
          <ListItem><img width={'200px'} height={'200px'} src={ require(`../${pictureURL}`).default } /></ListItem>
          <ListItem>{tittle}</ListItem>
          <ListItem>{price}</ListItem>
          <ListItem>{description}</ListItem>
          <ItemCount stock={3} initial={1} />
      </List>

  )
}
