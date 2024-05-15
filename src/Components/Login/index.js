import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppLogo from '../../IMG/AppLogo.png'
import LoginImg from '../../IMG/LoginImg.png'
import LoginImgMob from '../../IMG/LoginImgMob.png'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({isError: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, isError: true})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = e => {
    this.setState({username: e.target.value})
    }

    onChangePassword = e => {
        this.setState({password: e.target.value})
    }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
        <div className='login-container'>
        <div className='login-form-container'>
        <div background-img={LoginImgMob} className='mob-img'>
            <h1 className='login-text-mob'>Login</h1>
        </div>
            <form className='login-form' onSubmit={this.onSubmit}>
                <img src={AppLogo} alt="App Logo" className='app-logo' />
                <h1 className='app-title'>Tasty Kitchens</h1>
                <h1 className='login-text'>Login</h1>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label className='form-label' htmlFor='USERNAME'>USERNAME</label>
                    <input type="text" className='form-input' id="USERNAME" onChange={this.onChangeUserName} />
                    <label className='form-label' htmlFor='PASSWORD'>PASSWORD</label>
                    <input type="password" className='form-input' id="PASSWORD" onChange={this.onChangePassword} />
                    <button type='submit' className='login-btn'>Login</button>
                    {this.state.isError ? (<p className='login-err-msg'>*{this.state.errorMsg}</p>) : null}
                </div>
                
            </form>
        </div>
        <img src={LoginImg} alt="" className='login-img' />
    </div>
    )
  }
}

export default Login
