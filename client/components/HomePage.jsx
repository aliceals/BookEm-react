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
            { date: '9th November', temp: 22, icon: 'sun' },
            { date: '10th November', temp: 18, icon: 'rain' },
            { date: '11th November', temp: 24, icon: 'clear' },
            { date: '12th November', temp: 16, icon: 'rain' },
            { date: '13th November', temp: 20, icon: 'sun' },
            { date: '14th November', temp: 20, icon: 'clear' }],
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

                <h2>Hi {this.state.name}</h2>
                <h2>From {this.state.city}</h2>
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
                                return <td>{days.temp} <br></br> <img src={days.icon} /></td>
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


    // < button name = "day" value = "{{dates.tomorrow}}" > Book</button >

