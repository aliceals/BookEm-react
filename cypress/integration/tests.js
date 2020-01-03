describe('My First Test', function () {
    it('Test that it works', function () {
        expect(true).to.equal(true)
    })
})

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

}

it('A user can ', function () {
    logUserIn()

})

// it('A user can create a new group and delete a new group', function () {
//     logUserIn()

//     cy.get('.groupname')
//         .type('test group')
//         .should('have.value', 'test group')

//     cy.get('.groupdescription')
//         .type('banana')
//         .should('have.value', 'banana')

//     cy.get('.groupmember')
//         .type('banana')
//         .should('have.value', 'banana')

//     cy.contains('Add member').click()

//     cy.get('.groupmember')
//         .type('pickle')
//         .should('have.value', 'pickle')

//     cy.contains('Add member').click()

//     cy.contains('Create Group').click()

//     cy.contains('Add New Transaction')

//     cy.contains('Delete').click()


// })

// it('A user can create a transaction from already created group', function () {
//     logUserIn()

//     cy.contains('test group').click()

//     cy.contains('Add New Transaction').click()

//     cy.get('.paymentDesc')
//         .type('test one')
//         .should('have.value', 'test one')

//     cy.get('.payedby')
//         .select('banana')
//         .should('have.value', '42')

//     cy.get('.amount')
//         .type('20.00')
//         .should('have.value', '20.00')

//     cy.contains('Add Transaction').click()

//     cy.contains('View All Transactions').click()

//     cy.contains('test one')
// })


// it('A user can delete a transaction and it adds up to the right amount', function () {
//     logUserIn()

//     cy.contains('test group').click()

//     cy.contains('View All Transactions').click()

//     cy.contains('Delete!').click()

//     cy.contains('Yes, delete it!').click()

//     cy.contains('Total spend is $420')
// })