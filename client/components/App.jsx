import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
import BookingsPage from './BookingsPage'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    )
  }
}


export default App

