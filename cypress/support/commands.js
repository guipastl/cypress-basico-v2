Cypress.Commands.add('fillMandatoryFieldsAndSumit', () => {
    cy.get('#firstName').type('Guilherme')
    cy.get('#lastName').type('Pastl')
    cy.get('#email').type('gui@exemplo.com')
    cy.get('#open-text-area').type('texto exemplo abcd!@123')
    cy.get('.button[type="submit"]').click()

})