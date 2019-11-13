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

    console.log(bookingDetails)

    return request.post('/API/bookings')
        .send(bookingDetails)
        .then(response => response.body)
}

