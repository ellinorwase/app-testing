describe('Login Test', function() {
    it('Visits my local host', function() {
      cy.visit('/');
    });
  });

  describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(false)
    })
  })

  describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://example.cypress.io')
    })
  })

  describe('My First Test', function() {
    it('finds the content "type"', function() {
      cy.visit('https://example.cypress.io')
  
      cy.contains('hype')
    })
  })


