import React from 'react'
import { getBookings } from '../api'

class BookingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            booking: []

        }
    }

    componentDidMount() {
        this.refreshData()
    }

    // deleteBooking(id) {
    //     fetch("API/bookings/id",
    //         {
    //             method: "DELETE",
    //         }).then(() => {
    //             this.refreshData()
    //         })
    // }

    refreshData() {
        getBookings()
            .then(bookings => {
                this.setState({ booking: bookings })
            })
    }

    render() {

        let bookingArray = this.state.booking
        console.log("bookingArray", this.state.booking)

        return (
            <React.Fragment>
                <h3>These are your upcoming bookings</h3>
                <ul>
                    {bookingArray.map((booking) => {
                        return <li>Date: {booking.bookingDate}<br /> Time: {booking.bookingTime}<br /> Details: {booking.servicesDescription}<br /><br />
                            {/* <button onClick={this.deleteBooking(booking.id)}>Cancel</button><br /> */}
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