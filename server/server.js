const path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const db = require('./db.js')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const request = require('superagent')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())
server.use(morgan('dev'))
server.use(cookieParser())


// initialize express - session to allow us track the logged-in user across session
server.use(session({
    key: 'appsession',
    secret: 'somerandomstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        expires: 600000
    }
}))


server.get('/services', (req, res) => {
    db.getServices()
        .then(services => {
            res.send(services)
        })
})

server.get('/user', (req, res) => {
    let username = req.session.user.userName
    db.getUser(username)
        .then(user => {
            res.send(user)
        })
})

server.get('/bookings', (req, res) => {
    db.getBookings(req.session.user.userName)
        .then(bookings => {
            res.send(bookings)
        }).catch(err => {
            console.error(err)
            res.status(500).send(err.message)
        })
})

server.get('/contractor', (req, res) => {
    db.getContractorBookings(req.session.user.userName)
        .then(bookings => {
            res.send(bookings)
        })
})



server.delete('/bookings/', (req, res) => {
    let id = req.body.bookingId
    //validate that the booking belongs to the user and check session
    db.deleteBooking(id)
        .then((response) => {
            res.json({ response: response })
        })
})


server.get('/weather', (req, res) => {
    fetch(`https://api.darksky.net/forecast/6fe0e60f51867939f3313dd1351dcd17/-41.131489,174.839996?units=si`)
        .then((res) => res.json())
        .then(json => {
            res.send(json.daily)
        })
})

server.post('/bookings', (req, res) => {
    let booking = req.body
    let userId = req.session.user.userId
    booking.clientId = userId
    db.addBooking(booking)
        .then(() => {
            res.sendStatus(204)
        })
})


server.post('/register', (req, res) => {
    let user = req.body
    db.createUser(user)
        .then(() => {
            res.sendStatus(204)
        })
})



server.post('/contractorregister', (req, res) => {
    let contractor = req.body
    db.addContractor(contractor)
        .then(() => {
            res.sendStatus(204)
        })
})


server.put('/bookings', (req, res) => {
    let bookingId = req.body.booking
    let status = req.body.status

    db.updateBooking(bookingId, status)
        .then(() => {
            res.sendStatus(204)
        })
        .catch((e) => {
            console.log(e)
        })
})

server.get('/contractornames', (req, res) => {
    db.getContractors()
        .then(contractors => {
            res.send(contractors)
        })
})


server.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    db.getUser(username)
        .then(username => {
            if (!username) {
                console.log("no user with this username")
                res.send("404")
            } else {
                db.getPassword(username.userName, password)
                    .then(password => {
                        if (!password) {
                            console.log("incorrect password")
                            res.send("404")
                        } else {
                            console.log("correct username")
                            req.session.user = username
                            res.send(req.session.user)
                        }
                    })
            }
        })
})


server.get('/lnglat', (req, res) => {

    let addressArray = Object.values(req.query)

    let arr = addressArray.map((address) => {
        return address.split(" ").join('%20')
    })


    let arrayOfPromises = arr.map((address) => {

        return request.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=e49c348785874a5c9d9699b08b00239f&language=en&pretty=1`)
            .then(response => response.body.results[0].geometry)

    })

    Promise.all(arrayOfPromises).then((results) => {
        res.send(results)
    })

})


module.exports = server

