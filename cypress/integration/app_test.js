describe('hl100 runner tracking', function () {
    it('shows correct content', function () {
        cy.visit('https://highlonesome100runnertracking.firebaseapp.com/');

        cy.get('div.toolbar__title').should('have.text', 'High Lonesome 100 Administration Portal');

        cy.get('.hidden-sm-and-down').find('btn').should('have.length', 3);

        cy
            .get('div.btn__content')
            .eq(0)
            .click()
            .url()
            .should('contain', '/runnercheckin');

        cy.get('[aria-label="Bib #"]').type('35');
        cy.get('[aria-label="Name"]').type('Morgan Johnson');
        cy
            .get('div.container.fluid')
            .find('div.input-group.input-group--dirty.radio-group.radio-group--row')
            .eq(0)
            .find('[aria-label="Women/s"]')
            .find('div.input-group--selection-controls__ripple')
            .click();
        cy
            .get('div.container.fluid')
            .find('div.input-group.input-group--dirty.radio-group.radio-group--row')
            .eq(1)
            .find('[aria-label="M"]')
            .find('div.input-group--selection-controls__ripple')
            .click();
        cy.get('[aria-label="Location Staying"]').type('Holiday INN');
        cy.get('div').contains('submit').click();
    });
});