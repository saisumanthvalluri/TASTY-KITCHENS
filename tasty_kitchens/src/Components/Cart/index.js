import { Component } from "react";
import Header from "../Header";
import './index.css'

class Cart extends Component {
    render() {
        return(
            <div className="cart-container">
                <Header />
                <h1>Cart</h1>
            </div>
        )
    }
}

export default Cart