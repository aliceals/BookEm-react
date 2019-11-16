import React from 'react'
import { Link } from 'react-router-dom'
import { addContractor } from '../api'

class ContractorRegister extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contractor: {},
            redirectToLogin: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(e) {
        let contractor = this.state.contractor
        contractor[e.target.name] = e.target.value
        this.setState({
            contractor: contractor
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        addContractor(this.state.contractor)
        this.setState({
            redirectToLogin: true
        })
    }

    render() {
        return (

            <React.Fragment>
                <h2> Welcome to BookEm</h2>
                <h4>This is where you register to be a contractor</h4>
                <h3>Register</h3>
                <form>
                    <label>Name:
                        <input type="text"
                            name="contractorName"
                            placeholder="Name" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>City:
                        <input type="text"
                            name="contractorCity"
                            placeholder="Wellington" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Email:
                        <input type="text"
                            name="contractorEmail"
                            placeholder="johnsmith@gmail.com" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Phone Number:
                        <input type="text"
                            name="contractorNumber"
                            placeholder="0220220222" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>Password:
                        <input type="password"
                            name="contractorPassword"
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

export default ContractorRegister                
