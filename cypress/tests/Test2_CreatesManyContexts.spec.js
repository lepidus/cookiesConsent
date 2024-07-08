const admin = Cypress.env('adminUser') ?? 'admin';
const adminPassword = Cypress.env('adminPassword') ?? 'admin';

describe('Creates many contexts', function() {
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
		cy.get('input[name="supportedLocales"][value="en_US"]').check();
		cy.get('input[name="primaryLocale"][value="en_US"]').check();


		cy.get('input[name=urlPath]').type('publicknowledge2', {delay: 0});

		cy.get('button').contains('Save').click();
        cy.wait(15000);
	});
})
