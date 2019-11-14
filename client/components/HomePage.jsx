import React from 'react'
import Book from './BookPage'
import moment from 'moment'

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
                this.setState({
                    name: json.name,
                    city: json.city
                })
            })

        fetch("/API/weather")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    days: [{
                        date: moment().add(1, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[0].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[0].icon + '.png'
                    },
                    { date: moment().add(2, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[1].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[1].icon + '.png' },
                    { date: moment().add(3, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[2].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[2].icon + '.png' },
                    { date: moment().add(4, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[3].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[3].icon + '.png' },
                    { date: moment().add(5, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[4].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[4].icon + '.png' },
                    { date: moment().add(6, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[5].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[5].icon + '.png' },
                    { date: moment().add(7, 'days').format('dddd MMM Do YYYY'), highTemp: Math.round(json.data[6].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[6].icon + '.png' }]
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
                                return <td><img src={days.icon} /><br></br>High: {days.highTemp}°C <br></br>Low: {days.lowTemp}°C </td>
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



