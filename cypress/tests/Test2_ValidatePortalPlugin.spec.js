const admin = Cypress.env('adminUser');
const adminPassword = Cypress.env('adminPassword');

describe('Test with many contexts', function() {
	it('Creates a context', function() {
		cy.login(admin, adminPassword);
        cy.get('a:contains(' + admin + '):visible').click();
        cy.get('a:contains("Dashboard"):visible').click();
        cy.get('.app__nav a').contains('Administration').click();
        cy.get(':nth-child(2) > :nth-child(1) > a').click();
		cy.get('div[id=contextGridContainer]').find('a').contains('Create').click();

		cy.wait(1000);
		cy.get('input[name="name-en_US"]').type('journal2', {delay: 0});
		cy.get('input[name=acronym-en_US]').type('JPK', {delay: 0});
		cy.get('span').contains('Enable').siblings('input').check();
		cy.get('input[name="supportedLocales"][value="en_US').check();
		cy.get('input[name="primaryLocale"][value="en_US').check();

		cy.get('input[name=urlPath]').type('publicknowledge2', {delay: 0});

		cy.get('button').contains('Save').click();
        cy.wait(1000);
	});

    it('Enable plugin in site settings', function() {
		cy.login(admin, adminPassword);
        cy.get('a:contains("journal2"):visible').click();
        cy.get('a:contains(' + admin + '):visible').click();
        cy.get('a:contains("Dashboard"):visible').click();
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
                );
            }
        });
        cy.logout();
	});

    it('Show the cookies consent plugin in site homepage', function() {
		cy.login(admin, adminPassword);
        cy.get('.cc-window').should('be.visible');
        cy.get('.cc-window').contains('This website uses cookies to ensure your best experience Privacy Statement');
        cy.get('.cc-btn').should('be.visible');
	});
})
