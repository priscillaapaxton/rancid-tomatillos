// describe('Single Movie', () => {
//   beforeEach(() => {
//     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
//       statusCode: 200,
//       fixture: "singleMovie"
//     });
//     cy.visit('http://localhost:3000/436270');
//   })

//   it('As a user, when I load the application, I can see the RT logo', () => {
//     cy.get('.logo').should('be.visible')
//       .get('.logo').click()
//       .url().should('include', 'http://localhost:3000')
//   })

//   it('Should be able to see an individual movies details', () => {
//     cy.get('.single-movie-container')
//       .get('.single-movie')
//       .get('.movie-info-container')
//       .get('single-movie-title')
//       .contains('Black Adam')
//   })

// })