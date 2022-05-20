import {React, useState} from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import { makeStyles } from '@mui/styles';


// const style = makeStyles({
//     root:{

//     }

// })


export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(0)
    function onAdd(){
        if (stock >= count){
            setCount(count + 1) 
        }
        

    }
    function onSubstract(){
        if(count > 0){
            setCount(count - 1) 
        }
       
    }
  return (
        <Grid container>
            <Grid item>
                <ButtonGroup disableElevation variant="contained">
                <Button onClick={ onSubstract }>-</Button>
                <h3>{count}</h3>
                <Button onClick={ onAdd } disabled={stock === 0}>+</Button>
                <Button>Agregar al Carrito</Button>
                </ButtonGroup>
            </Grid>
        </Grid>


  );
}
