import request from 'superagent'




export function addBooking(booking) {


    let user_id = booking.user_id
    let job_id = booking.form.job_id
    let bookingDate = booking.bookingDate
    let bookingTime = booking.form.bookingTime

    let bookingDetails = {
        user_id: user_id,
        job_id: job_id,
        bookingDate: bookingDate,
        bookingTime: bookingTime
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
    console.log(newid)
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
    console.log("this is the api user", user)
    return request.post('/API/register')
        .send(user)
        .then(response => response.body)
}