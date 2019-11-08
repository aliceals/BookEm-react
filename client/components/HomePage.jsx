import React from 'react'
import Book from './BookPage'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Alice",
            city: 'Porirua',
            days: [{ date: '8th November', temp: 20, icon: '/images/cloudy.png' },
            { date: '9th November', temp: 22, icon: '/images/clear-day.png' },
            { date: '10th November', temp: 18, icon: '/images/windy.png' },
            { date: '11th November', temp: 24, icon: '/images/clear-day.png' },
            { date: '12th November', temp: 16, icon: '/images/windy.png' },
            { date: '13th November', temp: 20, icon: '/images/clear-day.png' },
            { date: '14th November', temp: 20, icon: '/images/windy.png' }],
            currentPendingBooking: null
        }

        this.changePendingBooking = this.changePendingBooking.bind(this)
    }

    changePendingBooking(event) {
        let day = event.target.value
        this.setState({
            currentPendingBooking: day
        })
    }

    render() {

        let daysArray = this.state.days

        return (
            < React.Fragment >
                <h1>BookEm</h1>
                <h4>Hi {this.state.name}</h4>
                <h5>From {this.state.city}</h5>
                <h6>Weather for the upcoming week:</h6>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="table-primary">
                            {daysArray.map((days) => {
                                return <th scope="col">{days.date}</th>
                            })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-primary">
                            {daysArray.map((days) => {
                                return <td>{days.temp}°C <br></br> <img src={days.icon} /></td>
                            })}
                        </tr>
                        <tr className="table-primary">
                            {daysArray.map((days) => {
                                return <td><button onClick={this.changePendingBooking} value={days.date}>Book</button></td>
                            })}
                        </tr>
                    </tbody>
                </table>
                {this.state.currentPendingBooking ? <Book day={this.state.currentPendingBooking} /> : null}
            </React.Fragment >
        )
    }
}

export default HomePage



