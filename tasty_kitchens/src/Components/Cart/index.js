import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import NoCartView from '../../IMG/NoCartView.png'
import './index.css'

class Cart extends Component {
    render() {
        return(
            <div className="cart-container">
                <Header />
                <div className="cart-responsive-box">
                    <img src={NoCartView} alt="no cart view" className="bowl-image" />
                    <h2 className="no-orders-text">No Orders Yet!</h2>
                    <p className="cart-empty-text">Your cart is empty. Add somthing from the menu.</p>
                    <Link to="/">
                        <button className='order-btn'>Order Now</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Cart