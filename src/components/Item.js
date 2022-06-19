import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ItemCount from './ItemCount';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../App.css';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
export default function Item({id, tittle, description, price, pictureURL }) {

  return (
      <Paper className='App-cards' elevation={3}>
        <List>
            <ListItem><CardMedia component="img" sx={{width: 600, height: 300 }} src={pictureURL}/></ListItem>
            <ListItem>{tittle}</ListItem>
            <ListItem>{price}</ListItem>
            <ListItem>{description}</ListItem>
            <Link to={`/item/${id}`} ><Button variant="contained" >Detalle</Button></Link>
            <ItemCount stock={3} initial={1} item={{id, tittle, description, price, pictureURL}}/>
        </List>
      </Paper>

  )
}
