exports.seed = knex =>
    knex('contractors').del()
        .then(() => knex('contractors').insert([
            { contractorId: 2221, contractorName: "Greater Gardens", contractorCity: "Wellington", contractorEmail: "test@gmail.com", contractorNumber: "02202202222", contractorPassword: "gardens" },
            { contractorId: 2222, contractorName: "Gardens for life", contractorCity: "Porirua", contractorEmail: "test@gmail.com", contractorNumber: "02202202222", contractorPassword: "gardens" },
            { contractorId: 2223, contractorName: "Mikes mowing", contractorCity: "Wellington", contractorEmail: "test@gmail.com", contractorNumber: "02202202222", contractorPassword: "gardens" },


        ]))