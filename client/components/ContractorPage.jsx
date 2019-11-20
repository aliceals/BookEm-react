import React from 'react'
import { Link } from 'react-router-dom'
import { getContractorBookings, updateBooking, deleteBooking, getCoords } from '../api'
import moment from 'moment'
import MapPage from './Map'
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
                {/* <MapPage coords={this.state.coords} /> */}
                <LeafletMap
                    center={[lat, lng]}
                    //make this usercity pull from state.
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

                    {console.log(coordsArray)}


                    {coordsArray.map((location) => {

                        return < Marker position={[location.lat, location.lng]} >
                            <Popup>
                                THis one works
                            </Popup>
                        </Marker>
                    })}

                    {/* < Marker position={[-41.113108, 174.9049647]} >
                        <Popup>
                            Lawn Mowing
                            09:00
                            </Popup>
                    </Marker> */}

                </LeafletMap>
            </React.Fragment >
        )

    }
}

export default ContractorPage               
