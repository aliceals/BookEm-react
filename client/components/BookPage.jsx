import React from 'react'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.props.day
        }
    }




    render() {
        return (
            <React.Fragment >
                <h3>Fill in booking details below</h3>
                <form>
                    <label>Date:
                        <input type="text" name="bookingDay" value={this.state.date} required />
                    </label>
                    <br />
                    <label>Time:
                        <input type="time" name="bookingTime" required />
                    </label>
                    <br />
                    <label>Book:<select name="job_id" id="jobId" >
                        <option value="1111" name="">Lawn mowing</option>
                        <option value="1112" name="">Weeding</option>
                        <option value="1113" name="">Lawn mowing and weeding</option>
                        <option value="1114" name="">Planting</option>
                        <option value="1115" name="">Retaining wall</option>
                    </select>
                    </label>
                    <br />
                    <button>Book</button>
                </form>

            </React.Fragment >
        )
    }
}

export default BookPage


