exports.seed = knex =>
    knex('bookings').del()
        .then(() => knex('bookings').insert([
            { bookingId: 2221, user_id: 0001, job_id: 1111, bookingDate: "2019-11-20", bookingTime: "09:00" },
            { bookingId: 2222, user_id: 0003, job_id: 1113, bookingDate: "2019-11-26", bookingTime: "11:00" },
            { bookingId: 2223, user_id: 0004, job_id: 1112, bookingDate: "2019-10-03", bookingTime: "15:00" },
            { bookingId: 2224, user_id: 0002, job_id: 1114, bookingDate: "2019-12-30", bookingTime: "08:00" },
            { bookingId: 2225, user_id: 0001, job_id: 1112, bookingDate: "2019-12-12", bookingTime: "09:30" },

        ]))