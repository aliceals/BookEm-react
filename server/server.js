const path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const db = require('./db.js')
const sessionUtils = require('./sessionutils')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())
server.use(morgan('dev'))
server.use(cookieParser())


// initialize express - session to allow us track the logged-in user across session
server.use(session({
    key: 'user_sid',
    secret: 'somerandomstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))


server.get('/API/services', (req, res) => {
    db.getServices()
        .then(services => {
            res.send(services)
        })
})

server.get('/API/user', (req, res) => {
    res.send({
        name: "Alice", city: "Porirua"
    })
})

server.get('/API/bookings', (req, res) => {
    db.getBookings(1)
        .then(bookings => {
            res.send(bookings)
        }).catch(err => {
            res.status(500).send(err.message)
        })
})

server.get('/API/contractor', (req, res) => {
    db.getContractorBookings(req.query.userId)
        .then(bookings => {
            res.send(bookings)
        })
})



server.delete('/API/bookings/', (req, res) => {
    let id = req.body.bookingId
    console.log("this is the id", id)
    //validate that the booking belongs to the user and check session
    db.deleteBooking(id)
        .then((response) => {
            res.json({ response: response })
        })
})


server.get('/API/weather', (req, res) => {
    fetch(`https://api.darksky.net/forecast/6fe0e60f51867939f3313dd1351dcd17/-41.131489,174.839996?units=si`)
        .then((res) => res.json())
        .then(json => {
            res.send(json.daily)
        })
})

server.post('/API/bookings', (req, res) => {
    let booking = req.body
    console.log(booking)
    db.addBooking(1, booking)
        .then(data => {
            console.log(data)
        })
})


server.post('/API/register', (req, res) => {
    let user = req.body
    db.createUser(user)
        .then(data => {
            console.log(data)
        })
})












// server.get('/API/user', (req, res) => {
//     db.getUser("Alice Alsford")
//         .then(data => { res.send(data) })
//         .then(() => {
//             console.log(data)
//         })
// })

// server.get('/API/bookings', (req, res) => {
//     db.getBookings("Alice Alsford")
//         .then(data => {
//             res.send(data)
//         })
//         .then(() => {
//             console.log(data)
//         })
// })

// server.get('/API/services', (req, res) => {
//     db.getServices()
//         .then(data => {
//             res.send(data)
//         })
//         .then(() => {
//             console.log(data)
//         })
// })






module.exports = server

