import request from 'superagent'




export function addBooking(booking) {
    console.log("this", booking)

    let status = booking.status
    let user_id = booking.user_id
    let job_id = booking.form.job_id
    let bookingDate = booking.bookingDate
    let bookingTime = booking.form.bookingTime
    let contractorId = booking.form.contractorId

    let bookingDetails = {
        status: status,
        user_id: user_id,
        job_id: job_id,
        bookingDate: bookingDate,
        bookingTime: bookingTime,
        contractorId: contractorId
    }


    return request.post('/API/bookings')
        .send(bookingDetails)
        .then(response => response.body)
}



export function getBookings() {
    return request.get('/API/bookings')
        .then(response => response.body)
}


export function deleteBooking(id) {
    let newid = { bookingId: id }
    return request
        .delete(`http://localhost:3000/API/bookings/`)
        .send(newid)
        .then(response => response.body)
}

export function getServiceList() {
    return request
        .get('/API/services')
        .then(response => response.body)
}

export function addUser(user) {
    return request.post('/API/register')
        .send(user)
        .then(response => response.body)
}

export function getContractorBookings(user) {
    return request.get('/API/contractor/')
        .query(`userId=${user}`)
        .then(response => response.body)
}



export function addContractor(contractor) {
    return request.post('/API/contractorregister')
        .send(contractor)
        .then(response => response.body)
}

export function updateBooking(booking, status) {
    return request.put('/API/bookings')
        .send({ booking: booking, status: status })
        .then(response => response.body)
}

export function getContractors() {
    return request.get('/API/contractornames')
        .then(response => response.body)
}