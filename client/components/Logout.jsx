import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Login extends React.Component {
    constructor(props) {
        super(props)

    }



    componentDidMount() {
        cookies.remove('appsession');
        window.location.href = "/#/login"
    }



    render() {
        return (

            <React.Fragment>
                <h1>Log out page</h1>
            </React.Fragment>
        )

    }
}

export default Login                
