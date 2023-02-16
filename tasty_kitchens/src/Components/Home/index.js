import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import Slider from "react-slick";
import './index.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

class Home extends Component {

    state = {
        imagesList: []
    }

    componentDidMount() {
        this.getCarouselImages()
    }

    getCarouselImages = async () => {
        const token = Cookies.get('jwt_token')
        const url = "https://apis.ccbp.in/restaurants-list/offers"
        const options = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: 'GET',
          }
        const res = await fetch(url, options)
        const data = await res.json()
        const imagesList = data.offers
        this.setState({imagesList})
        console.log(imagesList)
    }

    render() {
        const settings = {
            dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        // autoplaySpeed: 100,
        cssEase: "linear"
          };
          const {imagesList} = this.state
        return(
            <div className='home-container'>
                <Header />
                <div className="carousel-box">
                    <Slider {...settings}>
                        {imagesList.map(e => (
                            <div>
                                <img src={e.image_url} key={e.id} alt={e.id} className="carousel-img" />
                            </div>
                        ))} 
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Home