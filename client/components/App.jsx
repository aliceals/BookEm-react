import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
import BookPage from './BookPage'
import BookingsPage from './BookingsPage'
import Login from './Login'
import Register from './Register'
import ContractorPage from './ContractorPage'
import { getUser } from '../api'
import Cookies from 'universal-cookie'
import Logout from './Logout'


const cookies = new Cookies()


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }

  }

  componentDidMount() {
    if (!cookies.get('appsession')) {
      window.location.href = "/#/login"
    }

    if (cookies.get('appsession')) {
      getUser()
        .then(user => {
          this.setState({
            user: user
          })

        })
    }
  }


  render() {
    return (
      <Router>
        <>
          {this.state.user.role == "client" ?
            <>
              <Route path="/" component={NavBar} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path="/logout" component={Logout} />

              <Route exact path="/" render={(props) => <HomePage {...props} user=
                {this.state.user} />} />
              <Route exact path="/book" render={(props) => <BookPage {...props} user=
                {this.state.user} />} />
              <Route exact path="/bookings" render={(props) => <BookingsPage {...props} user=
                {this.state.user} />} />
              <a class="github-fork-ribbon" href="https://github.com/aliceals/BookEm-react" data-ribbon="View code on GitHub" title="View code on GitHub">View code on GitHub</a>

            </>

            : <>
              <Route path="/" component={NavBar} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path="/logout" component={Logout} />
              <Route path="/contractor" render={(props) => <ContractorPage {...props} user=
                {this.state.user} />} />
            </>}
        </>

      </Router>
    )
  }
}


export default App

// {this.state.user.role == "client" : ? null}