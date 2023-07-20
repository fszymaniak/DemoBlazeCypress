/// <reference types="cypress" />

describe('Healt Check ', () => {
    it('healt check works', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.navbar-brand').first().should('have.text', '\n      PRODUCT STORE')
  });
});