import { Component } from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'
import CartItemsContext from '../../Context/CartItemsContext'
import {BiRupee} from 'react-icons/bi'
import {MdDeleteOutline} from 'react-icons/md'
import './index.css'

class CartItem extends Component {
    state = {
        quantity: 1,
    }

    componentDidMount() {
        const {itemDetails} = this.props
        const {quantity} = itemDetails
        this.setState({quantity})
    }

    onIncrement = () => {
        this.setState(prev => ({quantity: prev.quantity + 1}))
    }

    onDecrement = () => {
        if (this.state.quantity > 1) {
            this.setState(prev => ({quantity: prev.quantity - 1}))
        }
    }

    render() {
        const {itemDetails, DeleteCartItem} = this.props
        const {id, imageUrl, name, cost, restaurantName} = itemDetails
        const {quantity} = this.state
        return(
            <CartItemsContext.Consumer>
                {value => {
                    const {updateQuantity} = value
                    const foodItem = {
                        id,
                        imageUrl,
                        name,
                        cost,
                        quantity,
                        restaurantName,
                    }
                    updateQuantity(foodItem)
                    const onDeleteCartItem = () => {
                        DeleteCartItem(id)
                    }
                    return(
                        <li className='cart-item'>
                            <div className='image-name-box'>
                                <img src={imageUrl} alt="cart-img" className='cart-item-image' />
                                <div style={{display: 'flex', flexDirection: 'column',margin: '0px', marginLeft: '10px'}}>
                                    <h2 className='cart-item-name'>{name}</h2>
                                    <h5 className='cart-item-rest-name'>from  {restaurantName}</h5>
                                </div>
                            </div>
                            <div className='quantity-box'>
                                <AiOutlineMinusSquare className='cart-item-quantity-icon' onClick={this.onDecrement} />
                                <h4 className='cart-item-quantity'>{quantity}</h4>
                                <AiOutlinePlusSquare className='cart-item-quantity-icon' onClick={this.onIncrement} />
                            </div>
                            <div className='cart-price-box'>
                                <h1 className='cart-item-price'><BiRupee /> {quantity * cost}</h1>
                            </div>
                            <img src={imageUrl} alt="cart img" className='mob-cart-item-image' />
                            <div className='cart-item-details'>
                                <h1 className='cart-item-name'>{name}</h1>
                                <h5 className='cart-item-rest-name'>from  {restaurantName}</h5>
                                <div className='mob-cart-quantity-box'>
                                    <AiOutlineMinusSquare className='cart-item-quantity-icon' onClick={this.onDecrement} />
                                    <h4 className='cart-item-quantity'>{quantity}</h4>
                                    <AiOutlinePlusSquare className='cart-item-quantity-icon' onClick={this.onIncrement} />
                                </div>
                                <h1 className='cart-item-price'><BiRupee /> {quantity * cost}</h1>
                            </div>
                            <MdDeleteOutline className='delete-icon' onClick={onDeleteCartItem} />
                        </li>
                    )
                }}
            </CartItemsContext.Consumer>
        )        
    }
    
}

export default CartItem