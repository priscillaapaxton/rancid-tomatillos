describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      fixture: "movies"
    })
    cy.visit('http://localhost:3000')
  })

  it('As a user, when I load the application, I should see a loading message', () => {
    cy.contains('Loading your favorite movies...').should('be.visible')
  })

  it('As a user, when I load the application, I can see the RT logo', () => {
    cy.get('.logo').should('be.visible')
      .get('.logo').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('As a user, when I load the application, I can see all movies', () => {
    cy.get('div')
      .get('.movie-container')
      .should('be.visible')
  })

  it('As a user, when I click on a movie, that individual movie page is displayed', () => {
    cy.get('.movie-container')
      .get('.movie-card')
      .first().click();
    cy.url().should('eq', 'http://localhost:3000/436270')
  })
})