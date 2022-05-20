import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {items} from '../mocks/ItemsMock' 
export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const prodPromise = await new Promise((res, rej) => {
        setTimeout(() => {
          res(
            items
          )
        }, 2000);
      })
      setProducts(prodPromise)
    } catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  
  return (
    <div>  
      
      <ItemList items={products} />
    </div>
  )
}
