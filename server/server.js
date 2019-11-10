const path = require('path')
const express = require('express')
// const fetch = require('node-fetch')
// const db = require('./db.js')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.get('/API/services', (req, res) => {
    res.send({
        services: [{
            name: "lawnmowing",
            fee: "$40"
        }, {
            name: "weeding",
            fee: "$50"
        }, {
            name: "retaining wall",
            fee: "$140"
        }]
    })
})

server.get('/API/user', (req, res) => {
    res.send({
        name: "Alice", city: "Porirua"
    })
})

server.get('/API/bookings', (req, res) => {
    res.send([{
        date: "10th November",
        time: "10:00am",
        service: "Lawn Mowing"
    }, {
        date: "11th November",
        time: "10:00am",
        service: "Lawn Mowing"
    }, {
        date: "12th November",
        time: "10:00am",
        service: "Lawn Mowing"
    }, {
        date: "19th November",
        time: "19:00am",
        service: "Weeding"
    }]
    )
})




server.get('/API/database', (req, res) => {

    res.send({ banana: "banana" })
})

// server.get('/API/weather', (req, res) => {
//     fetch(`https://api.darksky.net/forecast/6fe0e60f51867939f3313dd1351dcd17/-41.131489,174.839996?units=si`)
//         .then((res) => res.json())
//         .then(json => {
//             console.log(json.daily.data[1].icon)
//         })
// })


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

