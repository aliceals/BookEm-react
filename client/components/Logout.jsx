import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Login extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

        if (!cookies.get('appsession')) {
            window.location.href = "/#/login"
        } else {
            console.log("im in here")

        }
    }

    componentDidMount() {
        cookies.remove('appsession');
        window.location.href = "/#/login"
    }



    render() {
        return (

            <React.Fragment>

            </React.Fragment>
        )

    }
}

export default Login                
