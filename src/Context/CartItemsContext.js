import React from 'react'

const CartItemsContext = React.createContext({
  cartItems: [],
  setCartItems: () => {},
  updateQuantity: () => {},
})

export default CartItemsContext