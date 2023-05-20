describe('All Movies', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      fixture: "movies.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should have a movies displayed', () => {
    cy.get('.movie-container')
      .should('exist')
  })

  it('As a user, I should see all movie posters and titles', () => {
    cy.get('.movie-card-image')
      .should('have.length', 40)

    cy.get('.movie-card-title')
      .should('have.length', 40)
  })
})