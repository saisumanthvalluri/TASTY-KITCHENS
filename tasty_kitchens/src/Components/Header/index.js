import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import appLogo from '../../IMG/AppLogo.png'
import {RxHamburgerMenu} from 'react-icons/rx'
import Cookies from 'js-cookie'
import {IoIosCloseCircle, IoMdClose} from 'react-icons/io'
import './index.css'

class Header extends Component {
    state = {
        menuOpen:false,
        activeTab: "Home",
    }

    onToggleMenu = () => {
        this.setState(prev => ({menuOpen: !prev.menuOpen}))
    }

    closeMenu = () => {
        this.setState({menuOpen: false})
    }

    onLogout = () => {
        const {history} = this.props
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
    
    render() {
        const menuIcon = this.state.menuOpen ? 
            (<IoMdClose className='mob-menu-icon' onClick={this.onToggleMenu} />) 
                : (<RxHamburgerMenu className='mob-menu-icon' onClick={this.onToggleMenu} />)

        return(
            <div className='nav-bar'>
                <div className='responsive-box'>
                    <Link to='/'>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", width: "260px", justifyContent: "space-between"}}>
                            <img src={appLogo} alt="" className='app-logo' />
                            <h1 className='app-title'>Tasty Kitchens</h1>
                        </div>
                    </Link>
                    <div className='menu-list-box'>
                        <ul className='nav-list'>
                            <Link to="/">
                                <li className='nav-link'>Home</li>
                            </Link>
                            <Link to="/cart">
                                <li className='nav-link'>Cart</li>
                            </Link>
                        </ul>
                        
                        <Popup
                            modal
                            className="popup-content"
                            trigger={
                                <button className='logout-btn'>Logout</button>
                            }>
                            {close => (
                                <div className='logout-popup-box'>
                                    <h2 className='are-you-sure-text'>Are you sure you want to Logout?</h2>
                                    <div className='buttons-box'>
                                        <button className='btn cancel' onClick={() => close()}>Cancel</button>
                                        <button className='btn confirm' onClick={this.onLogout}>Confirm</button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
                <div className='mob-nav'>
                    <Link to='/'>
                        <div className='mob-logo-box'>
                            <img src={appLogo} className="mob-app-logo" alt="app-logo" />
                            <h1 className='mob-app-title'>Tasty Kitchens</h1>
                        </div>
                    </Link>
                    {menuIcon}
                </div>
                {this.state.menuOpen ? (
                    <div className='menu-list-box'>
                        <ul className='nav-list'>
                            <Link to="/">
                                <li className='nav-link' onClick={this.closeMenu}>Home</li>
                            </Link>
                            <Link to="/cart">
                                <li className='nav-link' onClick={this.closeMenu}>Cart</li>
                            </Link>
                            <Popup
                                modal
                                className="popup-content"
                                trigger={
                                    <button className='logout-btn'>Logout</button>
                                }>
                                {close => (
                                    <div className='logout-popup-box'>
                                        <h2 className='are-you-sure-text'>Are you sure you want to Logout?</h2>
                                        <div className='buttons-box'>
                                            <button className='btn cancel' onClick={() => close()}>Cancel</button>
                                            <button className='btn confirm' onClick={this.onLogout}>Confirm</button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </ul>
                        <IoIosCloseCircle className='mob-menu-close-icon' onClick={this.closeMenu} />
                    </div>
                ) : null}
            </div>
        )
    }
}

export default withRouter(Header)   