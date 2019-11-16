import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
import BookingsPage from './BookingsPage'
import Login from './Login'
import Register from './Register'


class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={NavBar} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path="/" component={HomePage} />
          <Route path="/book" component={BookPage} />
          <Route exact path="/bookings" component={BookingsPage} />
        </React.Fragment>
      </Router>
    )
  }
}


export default App

