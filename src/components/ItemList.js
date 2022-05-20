import React , {useEffect}from 'react'
import Item from './Item'

export default function ItemList({items}) {
    useEffect(() => {
        
    }, [items])
    
    return (
        <>
            {items.length !== 0 && items.map((item) => <Item key= {item.id} id={item.id} tittle={item.tittle} price={item.price} description = {item.description} pictureURL={item.pictureURL} /> )}
        </>
  )
}
