import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">BookEm</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                < Link className="nav-link" to="/" > Home</Link >
                            </li>
                            <li className="nav-item">
                                < Link className="nav-link" to="/book" > Book</Link >
                            </li>
                            <li className="nav-item">
                                < Link className="nav-link" to="/book" > Upcoming Bookings</Link >
                            </li>
                        </ul>

                    </div>
                </nav>

            </React.Fragment >
        )
    }
}

export default NavBar



