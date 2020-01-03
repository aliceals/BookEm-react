import request from 'superagent'




export function addBooking(booking) {
    let status = booking.status
    let job_id = booking.form.job_id
    let bookingDate = booking.bookingDate
    let bookingTime = booking.form.bookingTime
    let contractorId = booking.form.contractorId

    let bookingDetails = {
        status: status,
        job_id: job_id,
        bookingDate: bookingDate,
        bookingTime: bookingTime,
        contractorId: contractorId
    }


    return request.post('/bookings')
        .send(bookingDetails)
        .then(response => response.body)
}



export function getBookings() {
    return request.get('/bookings')
        .then(response => response.body)
}


export function deleteBooking(id) {
    let newid = { bookingId: id }
    return request
        .delete(`http://localhost:3000/bookings/`)
        .send(newid)
        .then(response => response.body)
}

export function getServiceList() {
    return request
        .get('/services')
        .then(response => response.body)
}

export function addUser(user) {
    return request.post('/register')
        .send(user)
        .then(response => response.body)
}

export function getContractorBookings() {
    return request.get('/contractor/')
        .then(response => response.body)
}



export function addContractor(contractor) {
    return request.post('/contractorregister')
        .send(contractor)
        .then(response => response.body)
}

export function updateBooking(booking, status) {
    return request.put('/bookings')
        .send({ booking: booking, status: status })
        .then(response => response.body)
}

export function getContractors() {
    return request.get('/contractornames')
        .then(response => response.body)
}

export function login(login) {
    return request.post('/login')
        .send(login.user)
        .then(response => response.text)
}

export function getUser() {
    return request.get('/user')
        .then(response => response.body)
}

export function getWeather() {
    return request.get('/weather')
        .then(response => response.body)
}

export function getCoords(addressArray) {
    return request.get('/lnglat')
        .query(addressArray)
        .then(response => response.body)
}

