import React from 'react'

class BookingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            booking:
                [{
                    date: "10th November",
                    time: "10:00am",
                    service: "Lawn Mowing",
                    cancel: false
                },
                {
                    date: "11th November",
                    time: "11:00am",
                    service: "Weeding",
                    cancel: false
                },
                {
                    date: "12th November",
                    time: "10:00am",
                    service: "Retaining Wall",
                    cancel: false
                }]
        }
    }

    componentDidMount() {
        this.refreshData()
    }

    deleteBooking(id) {
        fetch("API/bookings/id",
            {
                method: "DELETE",
            }).then(() => {
                this.refreshData()
            })
    }

    refreshData() {
        fetch("/API/bookings")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    booking: json
                })
            })
    }

    render() {

        let bookingArray = this.state.booking

        return (
            <React.Fragment>
                <h3>These are your upcoming bookings</h3>
                <ul>
                    {bookingArray.map((booking) => {
                        return <li>Date: {booking.date}<br /> Time: {booking.time}<br /> Details: {booking.service}<br /><br />
                            <button onClick={this.deleteBooking(booking.id)}>Cancel</button><br /><hr /></li>
                    })}
                </ul>

            </React.Fragment >
        )
    }
}

export default BookingsPage