//@ts-check
import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {items} from '../mocks/ItemsMock' 
import { useParams } from 'react-router-dom'
export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { categoryId} = useParams()




  const fetchProducts = async () => {
    try {
      const prodPromise = await new Promise((res, rej) => {
        setTimeout(() => {
          if(categoryId){
            const filterProds= items.filter((prods) => prods.categoryId === categoryId)
            console.log('lista de items' + filterProds)
            res(filterProds)
          }
          else{
            res(items)
          }
        }, 2000);
      })
      setProducts(prodPromise)
    } catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [categoryId])
  
  
  return (
    <div>  
      
      <ItemList items={products} />
    </div>
  )
}
