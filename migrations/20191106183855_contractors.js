
exports.up = function (knex) {
    return knex.schema.createTable('contractors', (table) => {
        table.increments('contractorId').primary()
        table.string('contractorName')
        table.string('contractorCity')
        table.string('contractorEmail')
        table.integer('contractorNumber')
        table.string('contractorpassword')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('contractors')
};
