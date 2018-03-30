describe('hl100 runner tracking', function () {
    it('shows correct content', function () {
        cy.visit('https://highlonesome100runnertracking.firebaseapp.com');

        cy.get('h1').should('have.text', 'High Lonesome 100');

        cy
            .get('div.btn__content')
            .click()
            .url()
            .should('contain', '/access');

        cy
            .get('div.text-xs-center.tri-links')
            .find('a.nav-link')
            .eq(0)
            .click()
            .url()
            .should('contain', '/roster');

        cy.get('h1').should('contain', 'RUNNERS');

        cy
            .get('div.text-xs-center.roster-link')
            .find('a.nav-link-roster')
            .eq(1)
            .click()
            .url()
            .should('contain', '/runnercheckin');

        cy.get('[aria-label="Bib #"]').type('35');
        cy.get('[aria-label="Name"]').type('Morgan Johnson');
        cy
            .get('div.container.fluid')
            .find('div.input-group.input-group--dirty.radio-group.radio-group--row')
            .eq(0)
            .find('div.input-group__input')
            .eq(0)
            .find('div.input-group.input-group--selection-controls.radio.accent--text')
            .eq(1)
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
        cy
            .get('div.text-xs-center.roster-link')
            .find('button')
            .eq(0)
            .click();
    });
});