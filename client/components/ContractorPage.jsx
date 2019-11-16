import React from 'react'
import { Link } from 'react-router-dom'

class ContractorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (

            <React.Fragment>
                <h2> Welcome to BookEm</h2>
                <h4>This is the Contractor Page</h4>
                <h5>Welcome {this.state.name}</h5>
                <h6>These are your pending bookings:</h6>
                <h6>These are your upcoming bookings:</h6>
                <h6>These are your past bookings:</h6>

            </React.Fragment>
        )

    }
}

export default ContractorPage               
