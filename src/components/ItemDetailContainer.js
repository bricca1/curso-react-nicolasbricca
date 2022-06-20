
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getFirestore , doc, getDoc, collection} from 'firebase/firestore'

//detail container
export default function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => { 
      const db = getFirestore()      
      const docRef = doc(db, "items", itemId)
      getDoc(docRef)
          .then((snapshot) => {
              if(snapshot.data() !== undefined) {
                  setProduct({id: snapshot.id, ...snapshot.data()})
                  console.log("snapshot id", snapshot.data())                  
              } else {
                console.log("No hay stock")

            }
          })
          
  }, [itemId])
    
  

    
 
  return (
    <ItemDetail item={ product }/>
  )
}
