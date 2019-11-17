
exports.up = function (knex) {
    return knex.schema.createTable('bookings', (table) => {
        table.increments('bookingId').primary()
        table.integer('clientId')
        table.integer('job_id')
        table.date('bookingDate')
        table.time('bookingTime')
        table.integer('contractorId')
        table.string('status')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('bookings')
};
