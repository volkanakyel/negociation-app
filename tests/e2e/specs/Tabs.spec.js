describe('Negotiation app tabs behaviour', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders employer tab active class by default', () => {
    cy.get('[data-cy=tabs-list]')
      .find('div.is-active')
      .should('contain', 'Employer Tab')
  })

  it('renders current tab details', () => {
    cy.get('[data-cy=tab-content]').contains('Enter Maximum Offer')
  })
})

describe('Employer tab submit offer', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the input number with employer offer', () => {
    cy.get('#offerEmployer')
      .find('input')
      .type('40000')
  })

  it('should submit the offer disable the current tab and switch to employee tab', () => {
    cy.get('#offerEmployer').find('input').type('40000')
    cy.get('#submitOffer').find('button').click()

    // Check employer tab is disabled
    cy.get('[data-cy=tabs-list]')
      .find('div')
      .first()
      .should('have.class', 'disable-tab')
  })
})

describe('Salary offer and open modal', () => {
  beforeEach(() => {
    cy.visit('/')
    // Setup: Submit employer offer first
    cy.get('#offerEmployer').find('input').type('40000')
    cy.get('#submitOffer').find('button').click()
  })

  it('should submit employee salary and open modal', () => {
    cy.get('#employeeSalary').find('input').type('35000')
    cy.get('#submitSalary').find('button').click()

    // Modal should be visible
    cy.get('.modal-overlay').should('be.visible')
  })

  it('renders modal with success message when offer >= salary', () => {
    cy.get('#employeeSalary').find('input').type('35000')
    cy.get('#submitSalary').find('button').click()

    cy.get('.modal-container').find('h2').should('have.class', 'win')
  })

  it('should close modal after clicking OK', () => {
    cy.get('#employeeSalary').find('input').type('35000')
    cy.get('#submitSalary').find('button').click()

    cy.get('.close-modal').click()
    cy.get('.modal-overlay').should('not.exist')
  })
})
