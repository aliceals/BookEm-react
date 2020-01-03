import React from 'react'

class NavBarNoRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="#">BookEm</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                < a className="nav-link" href="/" > Home</a>
                            </li>
                            <li className="nav-item">
                                < a className="nav-link" href="/login" >Login</a >
                            </li>
                            <li className="nav-item">
                                < a className="nav-link" href="/book" > Book</a >
                            </li>
                            <li className="nav-item">
                                < a className="nav-link" href="/bookings" > Upcoming Bookings</a >
                            </li>
                            <li className="nav-item">
                                < a className="nav-link" href="/Logout" > Logout</a >
                            </li>
                        </ul>

                    </div>
                </nav>

            </React.Fragment >
        )
    }
}

export default NavBarNoRouter



