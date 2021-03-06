import React from 'react'
import { getContractorBookings, updateBooking, deleteBooking, getCoords } from '../api'
import moment from 'moment'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class ContractorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            coords: [{ lat: "", lng: "" }]
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
            }).then(() => {
                let bookingsArray = this.state.bookings

                let clientAddress = bookingsArray.map((client) => {
                    return client.clientAddress + ' ' + client.clientCity
                })

                getCoords(clientAddress)
                    .then(coords => {
                        this.setState({
                            coords: coords
                        })
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


    render() {
        let bookingsArray = this.state.bookings
        let today = moment().format('YYYY-MM-DD')
        let lat = this.state.coords[0].lat
        let lng = this.state.coords[0].lng
        let coordsArray = this.state.coords

        return (

            <React.Fragment >
                <div className="contractor m-4">
                    <h2> Welcome to BookEm</h2>
                    <h4>This is the Contractor Page</h4>
                    <h5>Welcome {this.state.contractorUsername}</h5>
                    <h6>These are your pending bookings:</h6>
                    <ul>
                        {bookingsArray.map((booking) => {
                            if (booking.bookingDate > today && booking.status == "pending") {
                                return <li>Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')} <br></br>Booking Time: {booking.bookingTime}<br></br>
                                    Service: {booking.servicesDescription}<br></br> Client: {booking.clientUsername}<br></br>
                                    Client Address: {booking.clientAddress}, {booking.clientCity}<br></br>Client Phone Number: {booking.clientPhoneNumber}<br></br><br></br>
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
                                    Service: {booking.servicesDescription}<br></br> Client: {booking.clientUsername}<br></br>
                                    Client Address: {booking.clientAddress}, {booking.clientCity}<br></br>Client Phone Number: {booking.clientPhoneNumber}<br></br><br></br>
                                    <button name={booking.bookingId} onClick={this.deleteBooking}>Cancel</button><hr></hr></li>
                            }
                        })}
                    </ul>
                    <h6>These are your past bookings:</h6>
                    <ul>
                        {bookingsArray.map((booking) => {
                            if (booking.bookingDate < today && booking.status == "confirmed") {
                                return <li>Date: {moment(booking.bookingDate).format('dddd MMM Do YYYY')} <br></br>Booking Time: {booking.bookingTime}<br></br>
                                    Service: {booking.servicesDescription}<br></br> Client: {booking.clientUsername}<br></br>
                                    Client Address: {booking.clientAddress}, {booking.clientCity}<br></br>Client Phone Number: {booking.clientPhoneNumber}<br></br><br></br>
                                    <button name={booking.bookingId} >Archive</button><hr></hr></li>
                            }
                        })}
                    </ul>
                    <h5>Map of bookings:</h5>
                    <LeafletMap
                        center={[lat, lng]}
                        zoom={13}
                        maxZoom={20}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                    >

                        <TileLayer
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />

                        {coordsArray.map((location, i) => {
                            return < Marker position={[location.lat, location.lng]} >
                                <Popup>
                                    <strong>Date: </strong>{this.state.bookings.length > 0 ? this.state.bookings[i].bookingDate : null}<br></br>
                                    <strong>Time: </strong>{this.state.bookings.length > 0 ? this.state.bookings[i].bookingTime : null}<br></br>
                                    <strong>Service: </strong>{this.state.bookings.length > 0 ? this.state.bookings[i].servicesDescription : null}<br></br>
                                    <strong>Status: </strong>{this.state.bookings.length > 0 ? this.state.bookings[i].status : null}

                                </Popup>
                            </Marker>
                        })}

                    </LeafletMap>
                </div>
            </React.Fragment >
        )

    }
}

export default ContractorPage               
