import React from 'react'
import { Link } from 'react-router-dom'
import { getContractorBookings } from '../api'
import moment from 'moment'

class ContractorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        let user = "2221"
        getContractorBookings(user)
            .then(bookings => {
                this.setState({
                    bookings: bookings
                })
                console.log("state", this.state.bookings)
            })
    }


    render() {
        let bookingsArray = this.state.bookings
        let today = moment().format('YYYY-MM-DD')

        return (

            <React.Fragment>
                <h2> Welcome to BookEm</h2>
                <h4>This is the Contractor Page</h4>
                <h5>Welcome {this.state.name}</h5>
                <h6>These are your pending bookings:</h6>
                <ul>
                    {bookingsArray.map((booking) => {
                        if (booking.bookingDate > today && booking.status == "pending") {
                            return <li>Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')} <br></br>Booking Time: {booking.bookingTime}<br></br>
                                Service: {booking.servicesDescription}<br></br> Client: {booking.userName}<br></br>
                                Client Address: {booking.userAddress}, {booking.userCity}<br></br>Client Phone Number: {booking.phoneNumber}<br></br><hr></hr></li>

                        }
                    })}
                </ul>
                <h6>These are your upcoming bookings:</h6>
                <h6>These are your past bookings:</h6>

            </React.Fragment>
        )

    }
}

export default ContractorPage               