import {Component} from 'react'
import {Link} from 'react-router-dom'
import appLogo from '../../IMG/AppLogo.png'
import './index.css'

class Header extends Component {
    render() {
        return(
            <div className='nav-bar'>
                <div className='responsive-box'>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "280px", justifyContent: "space-between"}}>
                            <Link to='/'>
                                <img src={appLogo} alt="" className='app-logo' />
                            </Link>
                            <h1 className='app-title'>Tasty Kitchens</h1>
                        </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <ul className='nav-list'>
                            <Link to="/" style={{TextDecoder: "none"}}>
                                <li className='nav-link' style={{TextDecoder: "none"}}>Home</li>
                            </Link>
                            <Link to="/cart">
                                <li className='nav-link'>Cart</li>
                            </Link>
                        </ul>
                        <button className='logout-btn'>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header   