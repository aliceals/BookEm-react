import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
import BookingsPage from './BookingsPage'


class App extends React.Component {
  render() {
    return (

      <div>
        <h1>This is the bookem page</h1>
        <NavBar />
        <HomePage />
        <BookPage />
        <BookingsPage />
      </div>


    )
  }
}


export default App
