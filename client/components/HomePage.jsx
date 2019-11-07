import React from 'react'


class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Alice",
            city: 'Porirua',
            days: [{ date: '8th November', temp: 20, icon: 'sun' },
            { date: '9th November', temp: 22, icon: 'sun' },
            { date: '10th November', temp: 18, icon: 'rain' },
            { date: '11th November', temp: 24, icon: 'clear' },
            { date: '12th November', temp: 16, icon: 'rain' },
            { date: '13th November', temp: 20, icon: 'sun' },
            { date: '14th November', temp: 20, icon: 'clear' }],
            currentPendingBooking: null
        }
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
                                return <td>{days.temp} and {days.icon}</td>
                            })}
                        </tr>
                    </tbody>
                </table>







            </React.Fragment >
        )
    }
}

export default HomePage




