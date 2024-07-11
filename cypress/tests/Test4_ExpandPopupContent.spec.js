const admin = Cypress.env('adminUser') ?? 'admin';
const adminPassword = Cypress.env('adminPassword') ?? 'admin';
const context = Cypress.env('context') ?? 'publicknowledge';

describe('Expand cookies consent popup details', function() {
  it('Show Cookies Consent details', function() {
    cy.login(admin, adminPassword, context);
    cy.get('.app__contextTitle').click();
    cy.get('#cookie-settings-link').click();
    cy.get('p > .cc-link').should('be.visible');
    cy.get('p > .cc-link').contains('Read our Privacy Policy');
    cy.get('p').contains('You can disable them by changing your browser settings:');
    cy.get('ul > :nth-child(1) > .cc-link').contains('Chrome');
    cy.get('ul > :nth-child(2) > .cc-link').contains('Firefox');
    cy.get('ul > :nth-child(3) > .cc-link').contains('Microsoft Edge');
  });
});