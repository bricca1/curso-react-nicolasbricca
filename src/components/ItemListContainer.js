
import React, { useState, useEffect } from 'react'
import ItemList from './ItemList' 
import { useParams } from 'react-router-dom'
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore"

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { categoryId} = useParams()
  const [error, setError] = useState(false)


  useEffect(() => {
    setError(false);
    setProducts([]);
    const db = getFirestore();
    let products = undefined;

    if(categoryId){
      products = query(collection(db, "items"), where('category', '==', categoryId ))
      getDocs(products)
        .then((items) => {
          if(items.size === 0) {
            console.log("No hay productos")
            setError(true)
          } else {
            setProducts(items.docs.map((item) => ({id: item.id, ...item.data()})))
          }
        })
        .catch(() => setError(true))
    } else {
      products = collection(db, "items")
      getDocs(products)
        .then((items) => {
          setProducts(items.docs.map((item) => ({id: item.id, ...item.data()})))
        })
    }

  }, [categoryId])
  
  
  return (
    <div>  
      
      <ItemList items={products} />
    </div>
  )
}
