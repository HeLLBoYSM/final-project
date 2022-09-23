describe ('Submit test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Submit button works' , () => {
        cy.get('[data-test-id=submit-button]').should('be.visible')
    } )
})
