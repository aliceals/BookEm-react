exports.seed = knex =>
    knex('users').del()
        .then(() => knex('users').insert([
            { userId: 0001, userName: "Joe Bloggs", userAddress: "21 Samwell Drive, Whitby", userCity: "Porirua", email: "joe.bloggs@gmail.com", phoneNumber: "022222222", password: "Pickle", role: "client" },
            { userId: 0002, userName: "Phil Alsford", userAddress: "2 James Cook Drive, Whitby", userCity: "Porirua", email: "joe.bloggs@gmail.com", phoneNumber: "022422222", password: "pickle", role: "client" },
            { userId: 0003, userName: "Hugo Alsford", userAddress: "7 Discovery Drive, Whitby", userCity: "Porirua", email: "hugo.alsford@gmail.com", phoneNumber: "022224222", password: "pickle", role: "client" },
            { userId: 0004, userName: "Freya Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Porirua", email: "freya.alsford@gmail.com", phoneNumber: "022222222", password: "pickle", role: "client" },
            { userId: 0005, userName: "Stacey Groen", userAddress: "8 Postgate Drive", userCity: "Porirua", email: "joe.bloggs@gmail.com", phoneNumber: "022232222", password: "pickle", role: "client" },
            { userId: 0006, userName: "Lucy Tauai", userAddress: "1 Navigation Drive", userCity: "Porirua", email: "joe.bloggs@gmail.com", phoneNumber: "022322222", password: "pickle", role: "client" },
            { userId: 2221, userName: "Gardens and Gardens", userAddress: "21 Samwell Drive, Whitby", userCity: "Porirua", email: "test@gmail.com", phoneNumber: "02202202222", password: "Gardens", role: "contractor" },
            { userId: 2222, userName: "Gardens for life", userAddress: "21 Samwell Drive, Whitby", userCity: "Porirua", email: "test@gmail.com", phoneNumber: "02202202222", password: "gardens", role: "contractor" },
            { userId: 2223, userName: "Mikes mowing", userAddress: "21 Samwell Drive, Whitby", userCity: "Porirua", email: "test@gmail.com", phoneNumber: "02202202222", password: "gardens", role: "contractor" },

        ]))