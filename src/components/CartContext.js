
import React, { createContext, useContext, useState } from 'react'
export const CartContext = createContext([])


export default function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [repeated, setRepeated] = useState(undefined)
    const [total, setTotal] = useState(0)
    const addItemToCart =(product, quantity) => {
        const newItem = {product, quantity}
        const [flag, index] = isInCart(product.id)
        if(!flag) {
            setCart((prevState)=> [...prevState, newItem])
        }else{
            const newCart = [...cart]
            newCart[index].quantity += quantity
            setCart([...newCart])
        }
    };
    const removeItem = (item) => {
        const [, index] = isInCart(item.id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart([...newCart])

    };

    const clearCart = (cart) => {
        setCart([])
        setTotal(0)
    }
    const isInCart = (id) => {
        let flag = false 
        let i = 0
        cart.map((item, index)=> {
            if(item.product.id === id ){
                flag = true
                i = index
            }
        })
        return [flag, i]
    }
    const getTotalPrice = () => {
        if(cart.length !== 0) {
            const total = cart.reduce((acc, item) =>{
                let {product, quantity} = item
                return acc += (product.price * quantity)
            }, 0)
            return total
        }else{
            return 0
        }
    }

    const getQuantity = () => {
        if(cart.length !== 0) {
            const total = cart.reduce((acc, item) =>{
                let {product, quantity} = item
                return acc += quantity
            }, 0)
            return total
        }else{
            return 0
        }
    }

  return    <CartContext.Provider value={{ cart, addItemToCart, removeItem, clearCart, getTotalPrice, getQuantity}} >
                {children}
            </CartContext.Provider>
  
  }
export const useCart = ()=>{
    const context = useContext(CartContext);
    if(!context){
        throw new Error('error de context')
    }
    return context
}