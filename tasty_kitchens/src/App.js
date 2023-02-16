import {Component} from 'react'
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login'
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path="/not-found" component={PageNotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
