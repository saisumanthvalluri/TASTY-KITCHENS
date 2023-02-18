import { Component } from "react";
import RestaurantsListContext from "../../Context/RestaurantsListContext";
import {AiFillStar} from 'react-icons/ai'
import './index.css'

class RestaurantItem extends Component {
    render() {
        const {data} = this.props
        const {id, name, cuisine, menuType, userRating, imageUrl} = data
        const {rating, ratingColor, totalReviews} = userRating
        console.log(id, menuType)
        return(
            <RestaurantsListContext.Consumer>
                {value => {
                // const {restaurantList} = value
                return(
                    <li className="restaurant-item">
                        <img src={imageUrl} alt="restaurant-img" className="rest-image" />
                        <div className="rest-details">
                            <h1 className="rest-name">{name}</h1>
                            <h3 className="rest-type">{cuisine}</h3>
                            <div className="rating-box">
                                <AiFillStar color={ratingColor} />
                                <span className="rating">{rating}</span>
                                <span className="total-ratings">{`(${totalReviews} ratings)`}</span>
                            </div>
                        </div>
                    </li>
                )
            }}
            </RestaurantsListContext.Consumer>
        )
    }
}

export default RestaurantItem