import React from 'react'
import { Link } from 'react-router-dom'
import { addUser } from '../api'

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            redirectToLogin: false
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
        addUser(this.state.user)
        this.setState({
            redirectToLogin: true
        })
    }

    render() {
        return (

            <React.Fragment>
                <h2> Welcome to BookEm</h2>
                <h3>Register</h3>
                <form>
                    <label>Username:
                        <input type="text"
                            name="username"
                            placeholder="Name" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Address:
                        <input type="text"
                            name="userAddress"
                            placeholder="77 Fun Street" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>City:
                        <input type="text"
                            name="userCity"
                            placeholder="Wellington" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Email:
                        <input type="text"
                            name="email"
                            placeholder="johnsmith@gmail.com" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Phone Number:
                        <input type="text"
                            name="phoneNumber"
                            placeholder="0220220222" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Password:
                        <input type="password"
                            name="password"
                            placeholder="password" onChange={this.handleChange} autoComplete="on" />
                    </label>
                    <br></br>
                    <label>Re-enter Password:
                        <input type="password"
                            name="passwordMatch"
                            placeholder="Reenter password" autoComplete="on" />
                    </label>
                    <br></br>
                    <button type="submit" value={this.state} onClick={this.handleSubmit}>Register</button>

                </form>
                <br></br>
                <Link to="/login"><button>Login</button></Link>
            </React.Fragment>
        )

    }
}

export default Register                
