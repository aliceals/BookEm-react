import React from 'react'
import { getBookings, deleteBooking } from '../api'

class BookingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            booking: []

        }

        this.deleteBooking = this.deleteBooking.bind(this)
    }

    componentDidMount() {
        this.refreshData()
    }

    deleteBooking(e) {
        let bookingId = e.target.name
        deleteBooking(bookingId)
            .then(() => {
                this.refreshData()
            })

    }

    refreshData() {
        getBookings()
            .then(bookings => {
                this.setState({ booking: bookings })
            })
    }

    render() {

        let bookingArray = this.state.booking

        return (
            <React.Fragment>
                <h3>These are your upcoming bookings</h3>
                <ul>
                    {bookingArray.map((booking) => {
                        return <li>Date: {booking.bookingDate}<br /> Time: {booking.bookingTime}<br /> Details: {booking.servicesDescription}<br /><br />
                            <button name={booking.bookingId} onClick={this.deleteBooking}>Cancel</button><br />
                            <hr /></li>
                    })}
                </ul>

            </React.Fragment >
        )
    }
}

export default BookingsPage

// fetch("/API/bookings")
//     .then(response => response.json())
//     .then(json => {
//         this.setState({
//             booking: json
//         })
//     })