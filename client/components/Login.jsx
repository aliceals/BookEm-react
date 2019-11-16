import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../api'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            loginIncorrect: false
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
                if (res == 401) {
                    console.log("401 here")
                    this.setState({
                        loginIncorrect: true
                    })
                    console.log("changed", this.state)
                } else if (res == 200) {
                    console.log(res)
                }
            })
    }

    render() {
        return (

            <React.Fragment>
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
                <br></br>
                <Link to="/register"><button>Register</button></Link>
                <Link to="/contractorlogin"><button>Contractor Login</button></Link>
                {this.state.loginIncorrect ? <p>Incorrect username or password</p> : console.log("nope")}

            </React.Fragment>
        )

    }
}

export default Login                
