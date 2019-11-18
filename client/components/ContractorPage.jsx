import React from 'react'
import { Link } from 'react-router-dom'
import { getContractorBookings, updateBooking, deleteBooking, getUserCityCoords } from '../api'
import moment from 'moment'
import MapPage from './Map'
import Geocode from 'react-geocode'

class ContractorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            latLong: [-41.113108, 174.9049647]
        }

        this.changeStatus = this.changeStatus.bind(this)
        this.refreshData = this.refreshData.bind(this)
        this.deleteBooking = this.deleteBooking.bind(this)
    }

    componentDidMount() {
        this.refreshData()
    }

    changeStatus(e) {
        let bookingId = e.target.name
        let status = e.target.value
        updateBooking(bookingId, status)
            .then(() => {
                this.refreshData()
            })
    }

    refreshData() {

        getContractorBookings()
            .then(bookings => {
                this.setState({
                    bookings: bookings
                })
            })
            .then(() => {
                let clientArray = this.state.bookings
                clientArray.map((client) => {

                    getUserCityCoords(client.userAddress)
                })
            })
    }


    deleteBooking(e) {
        let bookingId = e.target.name
        deleteBooking(bookingId)
            .then(() => {
                this.refreshData()
            })
    }


    getUserCity



    render() {
        let bookingsArray = this.state.bookings
        let today = moment().format('YYYY-MM-DD')


        return (

            <React.Fragment >
                <h2> Welcome to BookEm</h2>
                <h4>This is the Contractor Page</h4>
                <h5>Welcome {this.state.name}</h5>
                <h6>These are your pending bookings:</h6>
                <ul>
                    {bookingsArray.map((booking) => {
                        if (booking.bookingDate > today && booking.status == "pending") {
                            return <li>Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')} <br></br>Booking Time: {booking.bookingTime}<br></br>
                                Service: {booking.servicesDescription}<br></br> Client: {booking.userName}<br></br>
                                Client Address: {booking.userAddress}, {booking.userCity}<br></br>Client Phone Number: {booking.phoneNumber}<br></br><br></br>
                                <button name={booking.bookingId} value="confirmed" onClick={this.changeStatus}>Accept</button>
                                <button name={booking.bookingId} value="declined" onClick={this.changeStatus}>Decline</button><hr></hr></li>

                        }
                    })}
                </ul>
                <ul>
                    <h6>These are your upcoming bookings:</h6>
                    {bookingsArray.map((booking) => {
                        if (booking.bookingDate > today && booking.status == "confirmed") {
                            return <li>Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')} <br></br>Booking Time: {booking.bookingTime}<br></br>
                                Service: {booking.servicesDescription}<br></br> Client: {booking.userName}<br></br>
                                Client Address: {booking.userAddress}, {booking.userCity}<br></br>Client Phone Number: {booking.phoneNumber}<br></br><br></br>
                                <button name={booking.bookingId} onClick={this.deleteBooking}>Cancel</button><hr></hr></li>
                        }
                    })}
                </ul>
                <h6>These are your past bookings:</h6>
                <ul>
                    {bookingsArray.map((booking) => {
                        if (booking.bookingDate < today && booking.status == "confirmed") {
                            return <li>Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')} <br></br>Booking Time: {booking.bookingTime}<br></br>
                                Service: {booking.servicesDescription}<br></br> Client: {booking.userName}<br></br>
                                Client Address: {booking.userAddress}, {booking.userCity}<br></br>Client Phone Number: {booking.phoneNumber}<br></br><br></br>
                                <button name={booking.bookingId} >Archive</button><hr></hr></li>
                        }
                    })}
                </ul>
                <h5>Map of bookings:</h5>
                <MapPage coords={this.state.latLong} />
            </React.Fragment >
        )

    }
}

export default ContractorPage               
