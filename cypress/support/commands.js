import {Login} from '../e2e/pages/login'
const Log= new Login();

Cypress.Commands.add('login', (email, password)=> {
    cy.session("loginSession", () => {
        cy.visit('https://iftradi.com/login')
        cy.wait(1000);
        cy.get(':nth-child(1) > .form-control').type(email);
        cy.wait(1000);
        cy.get(':nth-child(2) > .form-control').type(password);
        cy.wait(1000);
        cy.get(':nth-child(2) > .btn').click();
        cy.wait(2000);
        cy.url().should('contain', '/')
    })
})