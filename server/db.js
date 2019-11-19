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
    getContractors,
    getClientInfo
}



function addBooking(booking, db = database) {
    return db('bookings')
        .insert(booking)
        .select()

}

function getBookings(username, db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .join('users', 'bookings.clientId', 'users.userId')
        .where('userName', username)
        .select()
}

function getContractorBookings(username, db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .join('users as contractor', 'bookings.contractorId', 'contractor.userId')
        .join('users as client', 'bookings.clientId', 'client.userId')
        .where('contractor.userName', username)
        .select('bookings.clientId', 'bookingDate', 'bookingTime', 'status', 'servicesDescription', 'bookingId',
            'contractor.userName as contractorUsername', 'client.userName as clientUsername', 'client.userAddress as clientAddress',
            'client.userCity as clientCity', 'client.phoneNumber as clientPhoneNumber')
}


function getClientInfo(id, db = database) {
    return db('users')
        .where('userId', id)
        .select('userName', 'userAddress', 'userCity', 'phoneNumber')
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
    return db('users').where('userName', username).select('userName', 'userCity', 'userId', 'role').first()
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

// function getContractorBookings(contractorId, db = database) {
//     return db('bookings')
//         .join('services', 'job_id', 'servicesId')
//         .join('users', 'bookings.contractorId', 'users.userId')
//         .where('contractorId', contractorId)
//         .select()
// }

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

