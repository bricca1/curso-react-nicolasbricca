
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getFirestore , doc, getDocs} from 'firebase/firestore'
export default function ItemDetailContainer() {
    const [product, setProduct] = useState();
    const {itemId} = useParams()
    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db,"items");
      getDocs(itemsCollection).then((snapshot)=>{
        if(snapshot.size === 0){
          console.log('No results')
        }
        setProduct(snapshot.docs.map((doc) => ({
          id: doc.id , ...doc.data
        })))
      })
    }, [])
    
  

    
 
  return (
    <ItemDetail item={ product }/>
  )
}
