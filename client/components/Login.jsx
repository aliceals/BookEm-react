import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../api'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            loginIncorrect: false,
            redirectToHome: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }




    handleChange(e) {
        let user = this.state.user
        user[e.target.name] = e.target.value
        this.setState({
            user: user
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        login(this.state)
            .then(res => {
                if (res == "404") {
                    this.setState({
                        loginIncorrect: true
                    })
                } else {
                    let user = JSON.parse(res)
                    let userRole = user.role
                    if (userRole == 'client') {
                        console.log("client")
                        window.location.href = "/"
                    }
                    else if (userRole == 'contractor') {
                        console.log("client")
                        window.location.href = '/#/contractor'
                    }
                }
            })
    }

    render() {
        return (

            <React.Fragment>
                <div className="login">
                    <h2> Welcome to BookEm</h2>
                    <h3>Login</h3>
                    <form>
                        <label>Username:
                        <input type="text"
                                name="username"
                                placeholder="Name" onChange={this.handleChange} required />
                        </label>
                        <br></br>
                        <label>Password:
                        <input type="text"
                                name="password"
                                placeholder="password" onChange={this.handleChange} required />
                        </label>
                        <br></br>
                        <button type="submit" onClick={this.handleSubmit}>Login</button>

                    </form>

                    <p><span>For fake user use the following details:</span>
                        <ul>Client:<li> Username: Joe Bloggs</li>
                            <li>Password: Pickle</li>
                        </ul>
                        <ul>
                            <li>Contractor: Username: Gardens and Gardens</li>
                            <li>Password: Gardens</li>
                        </ul>
                    </p>
                    <br></br>
                    {/* <Link to="/register"><button>Register</button></Link> */}
                    {this.state.loginIncorrect ? <p className="incorrectUser">Incorrect username or password please try again</p> : null}
                </div>
            </React.Fragment >
        )

    }
}

export default Login                
