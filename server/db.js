const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    addBooking,
    getBookings,
    deleteBooking,
    getServiceFee,
    createUser,
    getUser,
    getPassword,
    getUsersCity,
    getServices,
    getContractorBookings,
    addContractor,
    updateBooking,
    getContractors
}



function addBooking(userId, booking, db = database) {
    return db('bookings')
        .where('user_id', userId)
        .insert(booking)
        .select()

}

function getBookings(userId, db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .join('users', 'user_id', 'userId')
        .where('userId', userId)
        .select()
}



function deleteBooking(bookingId, db = database) {
    return db('bookings').where('bookingId', bookingId).delete()
}

function getServiceFee(db = database) {
    return db('services').select('servicesFee')
}

function createUser(user, db = database) {
    return db('users').insert(user).select()
}

function getUser(username, db = database) {
    return db('users').where('userName', username).select('userName', 'userCity').first()
}

function getPassword(username, password, db = database) {
    return db('users').where('userName', username).where('password', password).select('password').first()
}

function getUsersCity(username, db = database) {
    return db('users').where('userName', username).select('userCity').first()

}

function getServices(db = database) {
    return db('services').select()
}

function getContractorBookings(contractorId, db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .join('users', 'user_id', 'userId')
        .where('contractorId', contractorId)
        .select()
}

function addContractor(contractor, db = database) {
    return db('contractors').insert(contractor).select()
}

function updateBooking(bookingId, status, db = database) {
    return db('bookings')
        .update({ status: status })
        .where('bookingId', bookingId)
        .select()
}

function getContractors(db = database) {
    return db('contractors')
        .select()
}