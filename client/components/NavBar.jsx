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
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Upcoming Bookings</a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </React.Fragment >
        )
    }
}

export default NavBar



    // < Link to = "/" > Home</Link >
    //     <Link to="/book">Book</Link>
    //     <Link to="/booking">Upcoming Bookings</Link>

