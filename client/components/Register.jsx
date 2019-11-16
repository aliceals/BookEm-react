import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)

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
                            placeholder="Name" required />
                    </label>
                    <br></br>
                    <label>Address:
                        <input type="text"
                            name="userAddress"
                            placeholder="77 Fun Street" required />
                    </label>
                    <br></br>
                    <label>City:
                        <input type="text"
                            name="userCity"
                            placeholder="Wellington" required />
                    </label>
                    <br></br>
                    <label>Email:
                        <input type="text"
                            name="email"
                            placeholder="johnsmith@gmail.com" required />
                    </label>
                    <br></br>
                    <label>Phone Number:
                        <input type="text"
                            name="phoneNumber"
                            placeholder="0220220222" required />
                    </label>
                    <br></br>
                    <label>Password:
                        <input type="password"
                            name="password"
                            placeholder="password" required />
                    </label>
                    <br></br>
                    <label>Re-enter Password:
                        <input type="password"
                            name="passwordMatch"
                            placeholder="Reenter password" required />
                    </label>
                    <br></br>
                    <button type="submit">Register</button>

                </form>
                <br></br>
                <Link to="/login"><button>Login</button></Link>
            </React.Fragment>
        )

    }
}

export default Register                
