import React from 'react'
import Book from './BookPage'
import moment from 'moment'
import { getUser, getWeather } from '../api'
import Cookies from 'universal-cookie'

const cookies = new Cookies()


class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            days: [],
            currentPendingBooking: null,
            redirectToLogin: false
        }

        this.changePendingBooking = this.changePendingBooking.bind(this)
    }

    componentWillMount() {

        if (!cookies.get('appsession')) {
            window.location.href = "/#/login"
        } else {
            console.log("im in here")

        }
    }


    componentDidMount() {


        getWeather()
            .then(json => {
                this.setState({
                    days: [{
                        date: moment().add(1, 'days'), highTemp: Math.round(json.data[0].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[0].icon + '.png'
                    },
                    { date: moment().add(3, 'days'), highTemp: Math.round(json.data[2].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[2].icon + '.png' },
                    { date: moment().add(4, 'days'), highTemp: Math.round(json.data[3].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[3].icon + '.png' },
                    { date: moment().add(5, 'days'), highTemp: Math.round(json.data[4].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[4].icon + '.png' },
                    { date: moment().add(6, 'days'), highTemp: Math.round(json.data[5].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[5].icon + '.png' },
                    { date: moment().add(7, 'days'), highTemp: Math.round(json.data[6].temperatureHigh), lowTemp: Math.round(json.data[0].temperatureLow), icon: '/images/' + json.data[6].icon + '.png' }]
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
                <h4 className="hi">Hi {this.props.user.userName}</h4>
                <h5 className="city">From {this.props.user.userCity}</h5>
                <h6 className="weatherTitle">Weather for the upcoming week:</h6>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="table-primary">
                            {daysArray.map((days, i) => {
                                return <th key={i} scope="col">{days.date.format('dddd MMM Do YYYY')}</th>
                            })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-primary">
                            {daysArray.map((days, i) => {
                                return <td key={i}><img src={days.icon} /><br></br>High: {days.highTemp}°C <br></br>Low: {days.lowTemp}°C </td>
                            })}
                        </tr>
                        <tr className="table-primary">
                            {daysArray.map((days, i) => {
                                return <td key={i}><button onClick={this.changePendingBooking} value={days.date.format('YYYY-MM-DD')}>Book</button></td>
                            })}
                        </tr>
                    </tbody>
                </table>
                {this.state.redirectLogin ? <Redirect to="/login" /> : null}

                {this.state.currentPendingBooking ? <Book day={this.state.currentPendingBooking} /> : null}
            </React.Fragment >
        )
    }
}

export default HomePage



