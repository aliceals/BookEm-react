import React from 'react'
import { Redirect } from 'react-router-dom'
import { addBooking, getServiceList } from '../api'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookingDate: this.props.day,
            user_id: 1,
            form: {},
            redirectToBookings: false,
            services: [],
            inputType: "date"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateChange = this.dateChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.getServices = this.getServices.bind(this)
    }

    componentDidMount() {
        this.getServices()
    }


    handleChange(e) {
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({
            form: form
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        addBooking(this.state)
        this.setState({
            redirectToBookings: true
        })

    }

    handleDateChange(e) {
        let date = e.target.value
        this.setState({
            bookingDate: date
        })
    }

    changePendingBooking(event) {
        let day = event.target.value
        this.setState({
            currentPendingBooking: day
        })
    }

    dateChange(e) {
        e.target.value = ""
        this.setState({
            inputType: "date"
        })
    }

    getServices() {
        getServiceList()
            .then(services => {
                this.setState({
                    services: services
                })
            })
    }


    //fix the drop down issue

    render() {
        let servicesArray = this.state.services

        return (
            <React.Fragment >
                <h3>Fill in booking details below</h3>
                <form>
                    <label>Date:
                        <input type={this.state.inputType}
                            name="day" value={this.state.bookingDate}
                            onClick={this.dateChange} onChange={this.handleDateChange} required />
                    </label>

                    <br />
                    <label>Time:
                        <input type="time" name="bookingTime" onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>Book:<select name="job_id" id="jobId" onChange={this.handleChange}>
                        {servicesArray.map((service) => {
                            return <option value={service.servicesId}>{service.servicesDescription} {service.servicesFee}</option>
                        })}
                    </select>
                    </label>

                    <br />

                    <button type="submit" value={this.state} onClick={this.handleSubmit} >Book</button>
                </form>
                {this.state.redirectToBookings ? <Redirect to="/bookings" /> : console.log("nope")}
            </React.Fragment >
        )
    }
}

export default BookPage


