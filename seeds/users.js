exports.seed = knex =>
    knex('users').del()
        .then(() => knex('users').insert([
            { userId: 0001, userName: "Alice Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Porirua", email: "alice.alsford@gmail.com", phoneNumber: "022222222", password: "pickle", role: "client" },
            { userId: 0002, userName: "Phil Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Wellington", email: "phil.alsford@gmail.com", phoneNumber: "022422222", password: "pickle", role: "client" },
            { userId: 0003, userName: "Hugo Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Hamilton", email: "hugo.alsford@gmail.com", phoneNumber: "022224222", password: "pickle", role: "client" },
            { userId: 0004, userName: "Freya Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Auckland", email: "freya.alsford@gmail.com", phoneNumber: "022222222", password: "pickle", role: "client" },
            { userId: 0005, userName: "Stacey Groen", userAddress: "7 Lambert Way", userCity: "Paraparaumu", email: "alice.alsford@gmail.com", phoneNumber: "022232222", password: "pickle", role: "client" },
            { userId: 0006, userName: "Lucy Tauai", userAddress: "144 Card Road, Tauhei", userCity: "Morrinsville", email: "alice.alsford@gmail.com", phoneNumber: "022322222", password: "pickle", role: "client" },
            { userId: 2221, userName: "Greater Gardens", userAddress: "76 Samwell Drive, Whitby", userCity: "Wellington", email: "test@gmail.com", phoneNumber: "02202202222", password: "gardens", role: "contractor" },
            { userId: 2222, userName: "Gardens for life", userAddress: "76 Samwell Drive, Whitby", userCity: "Porirua", email: "test@gmail.com", phoneNumber: "02202202222", password: "gardens", role: "contractor" },
            { userId: 2223, userName: "Mikes mowing", userAddress: "76 Samwell Drive, Whitby", userCity: "Wellington", email: "test@gmail.com", phoneNumber: "02202202222", password: "gardens", role: "contractor" },

        ]))