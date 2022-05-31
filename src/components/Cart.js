import React from 'react'
import { useCart } from './CartContext'
export default function Cart() {
  const {cart, addItemToCart, removeItem, clearCart} = useCart()
  return (
    <div>{cart.length}</div>
  )
}
