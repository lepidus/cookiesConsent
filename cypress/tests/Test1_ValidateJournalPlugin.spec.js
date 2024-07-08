const admin = Cypress.env('adminUser') ?? 'admin';
const adminPassword = Cypress.env('adminPassword') ?? 'admin';
const context = Cypress.env('context') ?? 'publicknowledge';

describe('Starts and View the block plugin', function() {
  it('Activate Plugin', function() {
    cy.login(admin, adminPassword, context);
    cy.get('.app__nav a')
      .contains('Website')
      .click();
    cy.get('button[id="plugins-button"]').click();
    cy.get('body').then(($body) => {
      if (
        !(
          $body.find(
            'tr[id="component-grid-settings-plugins-settingsplugingrid-category-generic-row-cookiesconsentplugin"] > :nth-child(3) > :nth-child(1) > :checked'
          ).length > 0
        )
      ) {
        cy.get(
          '#component-grid-settings-plugins-settingsplugingrid-category-generic-row-cookiesconsentplugin > :nth-child(3) >'
        ).click();
        cy.get(
          'div:contains(\'The plugin "Cookies Consent" has been enabled.\')'
        );
      }
    });
    cy.logout();
  });

  it('Show the cookies consent plugin in homepage', function() {
    cy.login(admin, adminPassword, context);
    cy.get('.app__contextTitle').click();
    cy.get('.cc-window').should('be.visible');
    cy.get('.cc-window').contains('This website uses cookies to ensure your best experience Privacy Statement');
    cy.get('.cc-btn').should('be.visible');
  });
});