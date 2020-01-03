

it('A user can visit the page', function () {
    cy.visit('https://book-em.herokuapp.com/#/login')

    cy.contains('Login')
})

function logUserIn() {
    cy.visit('https://book-em.herokuapp.com/#/login')

    cy.get('.username')
        .type('Joe Bloggs')
        .should('have.value', 'Joe Bloggs')

    cy.get('.password')
        .type('Pickle')
        .should('have.value', 'Pickle')

    cy.contains('Login!').click()

    cy.contains('Hi Joe Bloggs')

}

it('A user can book a day', function () {
    logUserIn()

    cy.contains('BookEm')

    cy.contains('Book!').click()

    cy.contains('Date').type('1999-12-31')

    cy.contains('Time').type('11:00')

    cy.get('.jobType').select('Lawn mowing $40')

    cy.get('.company').select('Mikes Mowing')

})

// it('A user can complete a booking', function () {
//     logUserIn()

//     cy.contains('BookEm')

//     cy.contains('.book').click()

// })


// it('A user can view upcoming bookings', function () {
//     logUserIn()

//     cy.contains('BookEm')

//     cy.contains('.book').click()

// })


// it('A user can delete a booking', function () {
//     logUserIn()

//     cy.contains('BookEm')

//     cy.contains('.book').click()

// })

// it('A user can confirm a booking', function () {
//     logUserIn()

//     cy.contains('BookEm')

//     cy.contains('.book').click()

// })

// it('A user can log in as a contractor to a different view', function () {
//     logUserIn()

//     cy.contains('BookEm')

//     cy.contains('.book').click()

// })