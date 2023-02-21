import { Component } from "react";
import {BiRupee} from 'react-icons/bi'
import {AiFillStar, AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'
import './index.css'

class FoodItem extends Component {

    state = {
        add: false,
        quantity: 0,
    }

    onToggle = () => {
        this.setState({add: true, quantity: 1})
    }

    onIncrease = () => {
        this.setState(prev => ({quantity: prev.quantity + 1}))
    }

    onDecrease = () => {
        const {quantity} = this.state
        if (quantity > 0) {
            this.setState(prev => ({quantity: prev.quantity - 1}))
        }
    }

    renderAddSection = () => {
        const {quantity} = this.state
        return(
            <div className="add-box">
                <AiOutlineMinusSquare className="add-buttons" onClick={this.onDecrease} />
                <span className="food-quantity">{quantity}</span>
                <AiOutlinePlusSquare className="add-buttons" onClick={this.onIncrease} />
            </div>
        )
    }

    render() {
        const {foodItemDetails} = this.props
        const {name, cost, rating, imageUrl} = foodItemDetails
        return(
            <li className="food-item">
                <img src={imageUrl} alt="hbsj" className="food-item-image" />
                <div className="food-item-details">
                    <h3 className="food-item-name">{name}</h3>
                    <h4 className="food-item-cost"><BiRupee /> {cost}</h4>
                    <h3 className="food-item-rating"><AiFillStar className="star" /> {rating}</h3>
                    {this.state.quantity > 0 ? (this.renderAddSection()) : (<button className="add-item-btn" onClick={this.onToggle}>ADD</button>)}
                </div>
            </li>
        )
    }
}

export default FoodItem