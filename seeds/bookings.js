exports.seed = knex =>
    knex('bookings').del()
        .then(() => knex('bookings').insert([
            { bookingId: 2221, clientId: 0001, job_id: 1111, bookingDate: "2019-11-20", bookingTime: "09:00", contractorId: 2221, status: "pending" },
            { bookingId: 2222, clientId: 0003, job_id: 1113, bookingDate: "2019-11-26", bookingTime: "11:00", contractorId: 2221, status: "pending" },
            { bookingId: 2223, clientId: 0004, job_id: 1112, bookingDate: "2019-10-03", bookingTime: "15:00", contractorId: 2221, status: "confirmed" },
            { bookingId: 2224, clientId: 0002, job_id: 1114, bookingDate: "2019-12-30", bookingTime: "08:00", contractorId: 2222, status: "confirmed" },
            { bookingId: 2225, clientId: 0001, job_id: 1112, bookingDate: "2019-12-12", bookingTime: "09:30", contractorId: 2223, status: "confirmed" },
            { bookingId: 2226, clientId: 0001, job_id: 1112, bookingDate: "2019-12-12", bookingTime: "09:30", contractorId: 2221, status: "confirmed" },

        ]))