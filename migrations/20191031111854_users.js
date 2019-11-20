
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('userId').primary()
        table.string('userName')
        table.string('userAddress')
        table.string('userCity')
        table.string('email')
        table.string('phoneNumber')
        table.string('password')
        table.string('role')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
