import React, {useState, useEffect} from 'react'
import {items} from '../mocks/ItemsMock'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
export default function ItemDetailContainer() {
    const [product, setProduct] = useState();
    const {itemId} = useParams()
    console.log(useParams())
    
  
    const getItem = () => {
     return new Promise((res, rej) => { 
          const productFilter = items.find( p => p.id === parseInt(itemId));
          res(productFilter);
      })
    };
    
    useEffect(() => {
      setTimeout(() => {
        getItem()
        .then((res) => {
          setProduct(res)
        })
        .catch((error)=>{
          console.log(error);
        })
      }, 2000);
      console.log(product)
    },[itemId]);
  return (
    <ItemDetail item={product}/>
  )
}
