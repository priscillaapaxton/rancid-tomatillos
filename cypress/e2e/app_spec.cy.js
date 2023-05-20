describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      fixture: "movies.json"
    })
    cy.visit('http://localhost:3000')
  })

  it('As a user, when I load the application, I can see the RT logo', () => {
    cy.get('.logo').should('be.visible')
      .get('.logo').click()
      .url().should('include', 'http://localhost:3000')
  })

  it('As a user, when I load the application, I can see all movies', () => {
    cy.get('div')
      .get('.movie-container')
      .should('be.visible')
  })

  it('As a user, when I click on a movie, an individual movie page is displayed', () => {
    // cy.fixture("singleMovie.json")
    //   .then(movie => {
    //   cy.intercept('GET',"https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", movie)
    // });

    // cy.get('.movie-container')
    //   .get('.movie-card')
      // .get('436270').click()
  })
})