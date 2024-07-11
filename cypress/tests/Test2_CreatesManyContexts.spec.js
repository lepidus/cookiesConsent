const admin = Cypress.env('adminUser') ?? 'admin';
const adminPassword = Cypress.env('adminPassword') ?? 'admin';

describe('Creates many contexts', function() {
	it('Creates a context', function() {
		cy.login(admin, adminPassword);
        cy.get('a:contains(' + admin + '):visible').click();
        cy.get('a:contains("Dashboard"):visible').click();
        cy.get('.app__nav a').contains('Administration').click();
        cy.get('.pkpButton').contains('Hosted Journals').click();
		cy.get('div[id=contextGridContainer]').find('a').contains('Create').click();

		cy.wait(1000);
		cy.get('#context-name-control-en').type('journal2', {delay: 0});
		cy.get('#context-acronym-control-en').type('JPK', {delay: 0});
		cy.get('#context-contactName-control').type('Dummy Publisher', {delay: 0});
		cy.get('#context-contactEmail-control').type('DummyPublisher@mailinator.com', {delay: 0});
		cy.get('select[id=context-country-control]').select('Brazil');
		cy.get('#context-urlPath-control').type('tests', {delay: 0});
		cy.get('span').contains('Enable').siblings('input').check();
		cy.get('input[name="supportedLocales"][value="en"]').check();
		cy.get('input[name="primaryLocale"][value="en"]').check();


		cy.get('input[name=urlPath]').type('publicknowledge2', {delay: 0});

		cy.get('button').contains('Save').click();
        cy.wait(15000);
	});
})
