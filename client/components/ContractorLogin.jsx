import React from 'react'
import { Link } from 'react-router-dom'

class ContractorLogin extends React.Component {
    constructor(props) {
        super(props)

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
                            placeholder="Name" required />
                    </label>
                    <br></br>
                    <label>Password:
                        <input type="text"
                            name="password"
                            placeholder="password" required />
                    </label>
                    <br></br>
                    <button type="submit">Login</button>

                </form>
                <br></br>
                <Link to="/contractorregister"><button>Register for Contractor</button></Link>
                <Link to="/login"><button>Client login</button></Link>

            </React.Fragment>
        )

    }
}

export default ContractorLogin               
