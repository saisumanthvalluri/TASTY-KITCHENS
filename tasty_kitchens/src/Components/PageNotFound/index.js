import { Link } from 'react-router-dom'
import './index.css'
import NotFoundImg from '../../IMG/NotFoundImg.png'

const PageNotFound = () => (
    <div className="not-found-container">
        <img src={NotFoundImg} alt="not found" className='not-found-img' />
        <h1 className='not-found-text'>Page Not Found</h1>
        <p className='not-found-caption'>
            We are sorry, the page you requested could not be found.<br/>
            Please go back to the home page
        </p>
        <Link to='/'>
            <button className='home-page-btn'>Home Page</button>
        </Link>
    </div>
)

export default PageNotFound