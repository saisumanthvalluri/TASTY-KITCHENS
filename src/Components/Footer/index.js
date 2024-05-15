import { BsInstagram, BsTwitter, BsWhatsapp} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import FooterAppLogo from '../../IMG/FooterAppLogo.png'
import './index.css'

const Footer = () => (
    <div className='footer-box'>
        <div className='footer-app-logo-box'>
            <img src={FooterAppLogo} alt="app-logo" className='footer-app-logo' />
            <h2 className='footer-app-title'>Tasty Kitchens</h2>
        </div>
        <p className='footer-caption-text'>The only thing we are serious about is food.</p>
        <p className='footer-caption-text'>Contact Us</p>
        <div className='social-media-icons-box'>
            <BsInstagram className='social-media-icon' />
            <BsTwitter className='social-media-icon' />
            <FaFacebookSquare className='social-media-icon' />
            <BsWhatsapp className='social-media-icon' />
        </div>
    </div>
)

export default Footer