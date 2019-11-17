import React from 'react'
import { getBookings, deleteBooking } from '../api'
import moment from 'moment'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class BookingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            booking: [],
        }
        this.deleteBooking = this.deleteBooking.bind(this)
    }



    componentWillMount() {
        if (!cookies.get('appsession')) {
            window.location.href = "/#/login"
        } else {
            console.log("im in here")

        }
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
        let today = moment().format('YYYY-MM-DD')

        return (
            <React.Fragment>
                <h3>These are your upcoming bookings</h3>
                <ul>

                    {bookingArray.map((booking) => {
                        if (booking.bookingDate < today) {
                            return null
                        }
                        return < li > Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')}<br /> Time: {booking.bookingTime}<br />
                            Details: {booking.servicesDescription}<br></br> Status: {booking.status}<br></br><br></br>
                            <button name={booking.bookingId} onClick={this.deleteBooking}>Cancel</button><br />
                            <hr /></li>
                    })}
                </ul>

            </React.Fragment >
        )
    }
}


export default BookingsPage

