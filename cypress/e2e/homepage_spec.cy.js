describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should see Dirtr title', () => {
    cy.get('.title').should('contain', 'Dirt')
    cy.get('.title-r').should('contain', 'r')
  })

  it('Should see welcome message', () => {
    cy.get('.welcome-message').should('contain', 'FIND YOUR PERFECT OFF-ROAD TRAIL')
  })

  it('Should see a button to find trails', () => {
    cy.get('.button-welcome').should('contain', 'FIND YOUR TRAIL ▶︎')
  })

})