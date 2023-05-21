describe('Single Movie', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 201,
        fixture: "movie"
      }
    )
    cy.visit('http://localhost:3000/436270')
  })

  it('As a user, when I load the application, I can see the RT logo', () => {
    cy.get('.logo')
      .should('be.visible')
    cy.get('.logo').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('As a user, I should see the selected movie\'s details', () => {
    cy.get('.single-movie')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    cy.get('.single-movie-title')
      .should('contain', 'Black Adam')
    cy.get('.single-movie-tagline')
      .should('contain', 'The world needed a hero. It got Black Adam.')
    cy.get('.single-movie-overview')
      .should('be.visible')
    cy.get('.single-movie-date')
      .should('contain', 'Release Date:')
    cy.get('.single-movie-rating')
      .should('contain', 'Average Rating: 4')
  })

  it('As a user, when I click on RETURN HOME, it navigates me back to the homepage', () => {
    cy.get('.home-button')
      .click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('Should alert the user to an error with the network', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436000', {
      statusCode: 404
    })
    .visit('http://localhost:3000/436000')
    .get('.error-container')
  })
})
