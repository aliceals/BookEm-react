import React from 'react'
import Book from './BookPage'
import moment from 'moment'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            days: [],
            currentPendingBooking: null
        }

        this.changePendingBooking = this.changePendingBooking.bind(this)

    }


    componentDidMount() {
        fetch("/API/user")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    name: json.name,
                    city: json.city
                })
            })

        fetch("/API/weather")
            .then(response => response.json())
            .then(json => {
                console.log("banana")
                this.setState({
                    days: [{ date: moment().add(2, 'days').format('dddd MMM Do YYYY'), temp: 20, icon: '/images/' + json.icon + '.png' },
                    { date: moment().add(2, 'days').format('dddd MMM Do YYYY'), temp: 22, icon: '/images/clear-day.png' },
                    { date: moment().add(3, 'days').format('dddd MMM Do YYYY'), temp: 18, icon: '/images/windy.png' },
                    { date: moment().add(4, 'days').format('dddd MMM Do YYYY'), temp: 24, icon: '/images/clear-day.png' },
                    { date: moment().add(5, 'days').format('dddd MMM Do YYYY'), temp: 16, icon: '/images/windy.png' },
                    { date: moment().add(6, 'days').format('dddd MMM Do YYYY'), temp: 20, icon: '/images/clear-day.png' },
                    { date: moment().add(7, 'days').format('dddd MMM Do YYYY'), temp: 20, icon: '/images/windy.png' }]
                })
            })
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
                <h1 className="title">BookEm</h1>
                <h4 className="hi">Hi {this.state.name}</h4>
                <h5 className="city">From {this.state.city}</h5>
                <h6 className="weatherTitle">Weather for the upcoming week:</h6>
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



