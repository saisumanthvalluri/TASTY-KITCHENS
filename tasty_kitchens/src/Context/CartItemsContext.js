import React from 'react'

const CartItemsContext = React.createContext({
  cartItems: [],
  setCartItems: () => {},
})

export default CartItemsContext