import React from 'react'
import { Redirect } from 'react-router-dom'
import { addBooking } from '../api'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookingDate: this.props.day,
            user_id: 1,
            form: {},
            redirectToBookings: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateChange = this.dateChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
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
        console.log(this.state)

    }

    handleDateChange(e) {
        console.log(e.target.value)
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
    }







    render() {
        return (
            <React.Fragment >
                <h3>Fill in booking details below</h3>
                <form>
                    <label>Date:
                        <input type="text" name="day" value={this.state.bookingDate} onClick={this.dateChange} onChange={this.handleDateChange} required />
                    </label>
                    <br />
                    <label>Time:
                        <input type="time" name="bookingTime" onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>Book:<select name="job_id" id="jobId" onChange={this.handleChange}>
                        <option value="1111" name="">Lawn mowing</option>
                        <option value="1112" name="">Weeding</option>
                        <option value="1113" name="">Lawn mowing and weeding</option>
                        <option value="1114" name="">Planting</option>
                        <option value="1115" name="">Retaining wall</option>
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


