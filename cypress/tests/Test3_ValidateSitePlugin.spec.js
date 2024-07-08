const admin = Cypress.env('adminUser') ?? 'admin';
const adminPassword = Cypress.env('adminPassword') ?? 'admin';
const newContext = "publicknowledge2"

describe('Validates site plugin', function() {
  it('Enables plugin in site settings and show cookie consent', function() {
    cy.login(admin, adminPassword, newContext);
    cy.get('.app__nav a').contains('Administration').click();
    cy.get('a:contains("Site Settings"):visible').click();
    cy.get('button[id="plugins-button"]').click();

    cy.get('body').then(($body) => {
      if (
        !(
          $body.find(
            'tr[id="component-grid-admin-plugins-adminplugingrid-category-generic-row-cookiesconsentplugin"] > :nth-child(3) > :nth-child(1) > :checked'
          ).length > 0
        )
      ) {
        cy.get(
          '#component-grid-admin-plugins-adminplugingrid-category-generic-row-cookiesconsentplugin > :nth-child(3) >'
        ).click();
        cy.get(
          'div:contains(\'The plugin "Cookies Consent" has been enabled.\')'
        ).should('be.visible');
      }
    });
    cy.logout();
    cy.get('.cc-window').should('be.visible');
    cy.get('.cc-window')
      .contains(
        'This website uses cookies to ensure your best experience Privacy Statement'
      )
      .should('be.visible');
    cy.get('.cc-btn').should('be.visible');
  });
});
