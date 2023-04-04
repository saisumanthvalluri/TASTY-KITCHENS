import {Component} from 'react'
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login'
import Home from './Components/Home';
import Cart from './Components/Cart';
import CartItemsContext from './Context/CartItemsContext';
import RestaurantDetailedPage from './Components/RestaurantDetailedPage';
import PageNotFound from './Components/PageNotFound';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    cartItems: [],
  }

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('cart_items'))
    this.setState({cartItems})
  }

  setCartItems = (newItem) => {
    const list = []
    const cartItems = JSON.parse(localStorage.getItem('cart_items'))
    if (cartItems !== null) {
      for (let i of cartItems) {
        if (i.id === newItem.id) {
          i.quantity = newItem.quantity
          localStorage.setItem('cart_items', JSON.stringify(cartItems))
        } else { 
            const updatedList = [...cartItems, newItem]
            localStorage.setItem('cart_items', JSON.stringify(updatedList))
          }
      }
    } else if (cartItems === null) {
        list.push(newItem)
        localStorage.setItem('cart_items', JSON.stringify(list))
      }
  }

  updateQunatity = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart_items'))
    for (let i of cartItems) {
      if (i.id === item.id) {
        i.quantity = item.quantity
      }
    }
    localStorage.setItem('cart_items', JSON.stringify(cartItems))
  }


  render() {
    const {cartItems} = this.state
    return(
      <BrowserRouter>
        <CartItemsContext.Provider
          value={{
            cartItems, setCartItems: this.setCartItems, updateQuantity: this.updateQunatity
          }}>
            <Switch>
              <Route exact path='/login' component={Login} />
              <ProtectedRoute exact path='/' component={Home} />
              <ProtectedRoute exact path='/cart' component={Cart} />
              <ProtectedRoute exact path='/restaurants-list/:id' component={RestaurantDetailedPage} />
              <ProtectedRoute exact path="/not-found" component={PageNotFound} />
              <Redirect to="/not-found" />
            </Switch>
        </CartItemsContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
