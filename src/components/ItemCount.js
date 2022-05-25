import {React, useState} from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';



export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(0)
  return (
        <Grid container>
            <Grid item>
                <ButtonGroup disableElevation variant="contained">
                <Button onClick={ () => count > 0 ? setCount(count - 1) : count }>-</Button>
                <h3>{count}</h3>
                <Button onClick={ () => stock > count ? setCount(count + 1) : count} disabled={stock === 0}>+</Button>
                <Link to={`/cart`}><Button onClick={()=> onAdd(count)}>Terminar mi compra </Button></Link>
                </ButtonGroup>
            </Grid>
        </Grid>


  );
}
