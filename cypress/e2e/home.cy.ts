describe('HOME', () => {
  it('should display the desktop table', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.table--desktop').should('be.visible')
    cy.get('.table--desktop').find('tr').should('have.length', 10)
    cy.get('.table--desktop').find('th').should('have.length', 5)
  })

  it('should display the mobile table', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:5173/')

    cy.get('.table--mobile').should('be.visible')
    cy.get('.table--mobile').find('tr').should('have.length', 10)
    cy.get('.table--mobile').find('th').should('have.length', 3)
  })

  it('should correctly search employee by its name on desktop', () => {
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('joao')

    cy.get('.table--desktop').find('tr').should('have.length', 2)
      .find('td').contains('João').should('be.visible')
  })

  it('should correctly search employee by its name on mobile', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('joao')

    cy.get('.table--mobile').find('tr').should('have.length', 2)
      .find('td').contains('João').should('be.visible')
  })

  it('should correctly search employee by its job on desktop', () => {
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('front')

    cy.get('.table--desktop').find('td')
      .filter(':contains("Front-end")').its('length').should('eq', 4)
  })

  it('should correctly search employee by its job on mobile', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('front')

    cy.get('.table--mobile').find('tr').should('have.length', 5)

    cy.get('.chevron-container-btn').first().should('exist').click()

    cy.get('.table--mobile').find('td')

    cy.get('.table--mobile').find('td')
      .filter(':contains("Front-end")').its('length').should('eq', 1)
  })

  it('should correctly search employee by its phone on desktop', () => {
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('+55 (50) 32165-4789')

    cy.get('.table--desktop').find('tr').should('have.length', 2)
      .find('td').contains('Roberto').should('be.visible')
  })

  it('should correctly search employee by its phone on mobile', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('+55 (50) 32165-4789')

    cy.get('.table--mobile').find('tr').should('have.length', 2)
      .find('td').contains('Roberto').should('be.visible')
  })

  it('should appear nothing with a wrong search on desktop', () => {
    cy.visit('http://localhost:5173/')

    cy.get('#search-input')
      .should('be.visible')
      .type('Lucas Alves')

    cy.get('.table--desktop').find('td').should('have.length', 0)
    // :(

    cy.get('#not-found').should('be.visible')
      .contains('Ops...Nenhum funcionário encontrado')
  })
})