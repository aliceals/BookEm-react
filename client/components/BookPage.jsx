import React from 'react'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.props.day,
            form: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        console.log(this.state)
        addBooking(this.state)
    }



    changePendingBooking(event) {
        let day = event.target.value
        this.setState({
            currentPendingBooking: day
        })
    }






    render() {
        return (
            <React.Fragment >
                <h3>Fill in booking details below</h3>
                <form>
                    <label>Date:
                        <input type="text" name="day" value={this.state.date} onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>Time:
                        <input type="time" name="time" onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>Book:<select name="service" id="jobId" onChange={this.handleChange}>
                        <option value="1111" name="">Lawn mowing</option>
                        <option value="1112" name="">Weeding</option>
                        <option value="1113" name="">Lawn mowing and weeding</option>
                        <option value="1114" name="">Planting</option>
                        <option value="1115" name="">Retaining wall</option>
                    </select>
                    </label>
                    <br />
                    <button type="submit" value={this.state} onClick={this.handleSubmit}>Book</button>
                </form>

            </React.Fragment >
        )
    }
}

export default BookPage


