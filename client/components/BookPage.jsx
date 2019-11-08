import React from 'react'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.props.day
        }

        console.log(this.state.date)
    }

    render() {
        return (
            <React.Fragment >
                <form>
                    <label>Date:
                        <input type="date" name="bookingDay" value={this.state.date} required />
                    </label>
                    <label>Time:
                        <input type="time" name="bookingTime" required />
                    </label>
                    <label>Book:<select name="job_id" id="jobId" >
                        <option value="1111" name="{{service1}}">Lawn mowing</option>
                        <option value="1112" name="{{service2}}">Weeding</option>
                        <option value="1113" name="{{service3}}">Lawn mowing and weeding</option>
                        <option value="1114" name="{{service4}}">Planting</option>
                        <option value="1115" name="{{service5}}">Retaining wall</option>
                    </select>
                    </label>
                    <button>Book</button>
                </form>

            </React.Fragment >
        )
    }
}

export default BookPage


